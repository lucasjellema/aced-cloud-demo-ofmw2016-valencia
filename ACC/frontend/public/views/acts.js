define(['knockout', 'ojs/ojcore', 'settings', 'ojs/ojmodel', 'ojs/ojknockout-model', 'ojs/ojbutton', 'ojs/ojlistview', 'ojs/ojarraytabledatasource'],
    function(ko, oj, settings) {
        return ActsViewModel;

        function ActsViewModel(moduleParams) {
            this.fetched = ko.observable(false);
            this.acts = ko.observableArray();
            this.sort = ko.observable('votes');
            this.sortedActs = ko.computed(sortedActs, this);
            this.dataSource = new oj.ArrayTableDataSource(this.sortedActs);
            this.handleActivated = handleActivated.bind(this);
            this.handleBindingsApplied = handleBindingsApplied.bind(this);
            this.drill = drill.bind(this, moduleParams);
        }
        function handleActivated() {
            var self = this;

            //Also get the likes for the artists.
            var actsPromise = $.getJSON("/mobile/custom/artistapi/acts")
                .then(function (json) {
                    console.log('@@@@', json);
                    $.each(json, function(i, act) {
                        act.registrationDate = new Date(act.registrationDate);
                        act.nameNoWhitespace = act.name && act.name.replace(/ /g,'');
                        act.likes = 0;
                    });
                    self.acts(json); // expose on ViewModel
                    self.dataSource.reset();
                    self.fetched(true);
                    return json;
                })
                .catch(function(err) { console.error(err); throw err; });
            Promise.all([actsPromise, $.getJSON("https://artist-enricher-api-partnercloud17.apaas.us6.oraclecloud.com/artists/likes")])
                .then(function (data) {
                    var acts = data[0];
                    var likes = data[1].artist_likes; 
                    $.each(acts, function(i, act) {
                        act.likes = likes[act.name] || 0;
                    });
                    self.dataSource.reset(); // ????
                })
                .catch(function(err) { console.error(err); throw err; });

            this.sort.subscribe(sortChanged.bind(this));
        }
        function handleBindingsApplied(info) {
            twttr && twttr.widgets.load(info.element.querySelector('.twitter-timeline'));
        }
        function sortChanged(newSort) {
            this.dataSource.reset();

        }
        function sortedActs() {
            var sortedActs = this.acts();
            var sort = this.sort();
            if (!sortedActs || !sort) { return sortedActs }
            return sortedActs.sort(function(actA, actB) {
                if (sort === 'votes') { return actB.numberOfVotes - actA.numberOfVotes; }
                if (sort === 'date') { return actA.registrationDate > actB.registrationDate ? -1 : actA.registrationDate < actB.registrationDate ? 1 : 0 }
                if (sort === 'likes') { return actB.likes - actA.likes; }
            });
        }
        function drill(moduleParams, event, ui) {
            var row = ui.value;
            var id = row[0];
            
            //Log to OMC
            var data = JSON.stringify({
            "logLevel": "info",
            "module": "accs.jet.artists-portal.client",
            "message": "We are drilling down in the acts. Going to act: " + id
            });
            
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            
            xhr.addEventListener("readystatechange", function () { // do not care about response
            });
            
            xhr.open("POST", "https://artist-enricher-api-partnercloud17.apaas.us6.oraclecloud.com/logger-api");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.send(data);
            //End log to OMC

            moduleParams.drillModel.drillId(id);
            moduleParams.drillModel.currentModule("details");
        }
    });

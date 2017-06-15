define(['knockout', 'ojs/ojcore', 'settings', 'ojs/ojmodel', 'ojs/ojfilmstrip', 'ojs/ojbutton'],
    function (ko, oj, settings) {

        return DetailsViewModel;

        function DetailsViewModel(moduleParams) {
            this.id = moduleParams.drillModel.drillId();
            this.fetched = ko.observable(false);
            this.data = ko.observable();
            this.nameNoWhitespace = ko.computed(nameNoWhitespace, this);
            this.handleActivated = handleActivated.bind(this);
            this.getItemInitialDisplay = getItemInitialDisplay.bind(this);
            this.goBack = goBack.bind(this, moduleParams);
            this.like = like.bind(this);
        }

        function handleActivated() {
            var self = this;
            console.log('self.id: ', self.id );
            var actPromise = $.getJSON("/mobile/custom/artistapi/acts/" + self.id)
                .then(function (json) {
                    console.log('json: ', json );
                    json.likes = 0;
                    console.log('data: ', self.data)
                    self.data(json); // expose on ViewModel
                    self.fetched(true);
                    return json;
                })
                .catch(function (err) { console.error(err); throw err; });
            Promise.all([actPromise, $.getJSON("https://artist-enricher-api-partnercloud17.apaas.us6.oraclecloud.com/artists/likes")])
                .then(function (data) {
                    var act = data[0];
                    var likes = data[1].artist_likes;
                    act.likes = likes[act.name] || 0;
                    self.data(act);
                })
                .catch(function (err) { console.error(err); throw err; });
        }

        function getItemInitialDisplay(index) {
            return index < 3 ? '' : 'none';
        }

        function goBack(moduleParams, event, ui) {
            moduleParams.drillModel.drillId(undefined);
            moduleParams.drillModel.currentModule('acts');
        }

        function like() {
            this.data().likes++;
            this.data(this.data());
            $.getJSON('https://129.144.150.140:8010/artists/like/' + this.data().name);
        }

        function nameNoWhitespace() {
            var data = this.data();
            return data && data.name && data.name.replace(/ /g, '_').toLowerCase();
        }

    });

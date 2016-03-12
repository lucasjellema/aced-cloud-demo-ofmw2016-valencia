define(['knockout', 'ojs/ojcore', 'settings', 'ojs/ojmodel', 'ojs/ojknockout-model', 'ojs/ojbutton', 'ojs/ojlistview', 'ojs/ojarraytabledatasource'],
    function(ko, oj, settings) {
        var ActsCollection = oj.Collection.extend({
            url: settings.baseUrl + '/mobile/custom/artistapi/acts',
            parse: function(response) {
                response.forEach(function(row) { row.registrationDate = new Date(row.registrationDate); });
                return response;
            }
        });
        return ActsViewModel;

        function ActsViewModel(moduleParams) {
            this.fetched = ko.observable(false);
            this.acts = ko.observableArray();
            this.sort = ko.observable('votes');
            this.sortedActs = ko.computed(sortedActs, this);
            this.dataSource = new oj.ArrayTableDataSource(this.sortedActs);
            this.handleActivated = handleActivated.bind(this);
            this.drill = drill.bind(this, moduleParams);
        }
        function handleActivated() {
            var self = this;
            var acts = new ActsCollection();
            acts.fetch({
                success: function(coll, response, options) {
                    self.acts(oj.KnockoutUtils.map(coll)); // map ojCollection to array (of observables)
                    self.dataSource.reset(self.acts()); // force datasource refresh
                    self.fetched(true);
                }
            });
            this.sort.subscribe(sortChanged.bind(this));
        }
        function sortChanged(newSort) {
            this.dataSource.reset();

        }
        function sortedActs() {
            var sortedActs = this.acts();
            var sort = this.sort();
            if (!sortedActs || !sort) { return sortedActs }
            return sortedActs.sort(function(actA, actB) {
                if (sort === 'votes') { return actB.numberOfVotes() - actA.numberOfVotes(); }
                if (sort === 'date') { return actA.registrationDate() > actB.registrationDate() ? -1 : actA.registrationDate() < actB.registrationDate() ? 1 : 0 }
            });
        }
        function drill(moduleParams, event, ui) {
            var row = ui.value;
            var id = row[0]();
            moduleParams.drillModel.drillId(id);
            moduleParams.drillModel.currentModule("details");
        }

    });

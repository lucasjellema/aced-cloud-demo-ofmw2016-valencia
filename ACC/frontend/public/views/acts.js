define(['knockout', 'ojs/ojcore', 'settings', 'ojs/ojmodel', 'ojs/ojknockout-model', 'ojs/ojbutton'],
    function (ko, oj, settings) {
        var ActsCollection = oj.Collection.extend({
            url: settings.baseUrl + '/mobile/custom/artistapi/acts',
            parse: function (response) {
                response.forEach(function (row) { row.registrationDate = new Date(row.registrationDate); });
                return response;
            }
        });
        return ActsViewModel;

        function ActsViewModel() {
            this.fetched = ko.observable(false);
            this.acts = ko.observableArray();
            this.sort = ko.observable('votes');
            this.sortedActs = ko.computed(sortedActs, this);
            this.handleActivated = handleActivated.bind(this);
        }
        function handleActivated() {
            var self = this;
            var acts = new ActsCollection();
            acts.fetch({
                success: function (coll, response, options) {
                    self.acts(oj.KnockoutUtils.map(coll));
                    self.fetched(true);
                }
            });
        }
        function sortedActs() {
            var sortedActs = this.acts();
            var sort = this.sort();
            if (!sortedActs || !sort) { return sortedActs }
            return sortedActs.sort(function (actA, actB) {
                if (sort === 'votes') { return actB.numberOfVotes() - actA.numberOfVotes(); }
                if (sort === 'date') { return actA.registrationDate() > actB.registrationDate() ? -1 : actA.registrationDate() < actB.registrationDate() ? 1 : 0 }
            });
        }

    });

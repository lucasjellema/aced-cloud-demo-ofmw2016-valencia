define(['knockout', 'ojs/ojcore', 'settings', 'ojs/ojmodel', 'ojs/ojknockout-model'],
    function (ko, oj, settings) {
        return ActsViewModel;

        function ActsViewModel() {
            // PUBLIC API
            this.acts = ko.observableArray();
            this.handleActivated = handleActivated;

            // ============================
            // IMPLEMENTATION DETAILS BELOW
            var self = this;

            function handleActivated() {
                var acts = new ActsCollection();
                acts.fetch({
                    success: function (coll, response, options) {
                        self.acts(oj.KnockoutUtils.map(coll));
                    }
                });
            }
            var ActsCollection = oj.Collection.extend({
                url: settings.baseUrl + '/mobile/custom/artistapi/acts'
            });
        }

    });

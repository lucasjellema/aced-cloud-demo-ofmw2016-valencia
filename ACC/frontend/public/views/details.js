define(['knockout', 'ojs/ojcore', 'settings', 'ojs/ojmodel', 'ojs/ojfilmstrip'],
    function (ko, oj, settings) {
        var ActModel = oj.Model.extend({
            urlRoot: settings.baseUrl + '/mobile/custom/artistapi/acts'
        });
        return DetailsViewModel;

        function DetailsViewModel(id) {
            this.id = id;
            this.fetched = ko.observable(false);
            this.data = ko.observableArray();
            this.handleActivated = handleActivated.bind(this);
            this.getItemInitialDisplay = getItemInitialDisplay.bind(this);
        }
        function handleActivated() {
            var self = this;
            var act = new ActModel();
            act.id = this.id;
            act.fetch({
                success: function (model, response, options) {
                    console.log(response);
                    self.data(oj.KnockoutUtils.map(model))
                    self.fetched(true);
                }
            });
        }
        function getItemInitialDisplay(index) {
            console.log('@@@@@@@@@ index', index);
            return index < 3 ? '' : 'none';
        }
    });

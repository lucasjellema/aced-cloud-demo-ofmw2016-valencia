define(['knockout', 'ojs/ojcore', 'ojs/ojmoduleanimations'],
    function(ko, oj) {
        return DrillViewModel;

        function DrillViewModel() {
            this.currentModule = ko.observable("acts");
            this.drillId = ko.observable();
            this.switcherCallback = switcherCallback.bind(this);
        }

        function switcherCallback(context) {
            // context.valueAccessor().params can be used to access the ojModule params option,
            // which may contain additional states from the router if it is used with ojModule.
            return this.currentModule() === 'acts' ? 'drillOut' : 'drillIn';
        }
        
    });

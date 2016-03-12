define(['knockout', 'jquery', 'ojs/ojbutton', 'ojs/ojpopup'],
    function (ko, $) {
        return ActViewModel;

        function ActViewModel(act) {
            this.act = act;
            this.details = ko.observable(false); // should details module be loaded
        }
    });

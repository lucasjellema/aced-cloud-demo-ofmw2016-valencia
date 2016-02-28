define(['knockout'],
    function (ko) {
        return ActViewModel;

        function ActViewModel(act) {
            this.act = act;
            this.fetched = ko.observable(false);
        }

    });

define(['knockout'],
    function (ko) {
        return ActViewModel;

        function ActViewModel(act) {
            // PUBLIC API
            this.act = act;
            this.fetched = ko.observable(false);

            // ============================
            // IMPLEMENTATION DETAILS BELOW
        }

    });

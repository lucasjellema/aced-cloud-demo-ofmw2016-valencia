define(['knockout', 'ojs/ojchart', 'ojs/ojtoolbar', 'ojs/ojbutton'],
    function (ko) {
        var converterFactory = oj.Validation.converterFactory('number');
        var votesConverter = converterFactory.createConverter({ minimumFractionDigits: 0, maximumFractionDigits: 0 });
        return ChartViewModel;

        function ChartViewModel(acts) {
            this.acts = acts;
            this.type = ko.observable('bar');
            this.stack = ko.observable('off');
            this.orientation = ko.observable('horizontal');
            this.series = ko.computed(series, this);
            this.votesConverter = ko.observable(votesConverter);

            this.typeOptions = [
                { id: 'bar', label: 'bar', value: 'bar', icon: 'oj-icon demo-bar-unstack' },
                { id: 'pie', label: 'pie', value: 'pie', icon: 'oj-icon demo-bar-stack' }
            ];
            this.stackOptions = [
                { id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack' },
                { id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack' }
            ];
            this.orientationOptions = [
                { id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert' },
                { id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz' }
            ];
        }
        function series() {
            if (this.type() === 'pie') {
                return this.acts.map(function (act) { return { name: act.name, items: [{ value: act.numberOfVotes, label: act.numberOfVotes }] } });
            } else {
                return this.acts.map(function (act) { return { name: act.name, items: [act.numberOfVotes] } });
            }
        }

    });

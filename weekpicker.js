(function ($) {

    var LAST_WEEK = 52;
    // please change by 2037 or it's Y2K all over again
    if ([2015, 2020, 2026, 2032].indexOf(new Date().getFullYear()) > -1) {
        LAST_WEEK = 53;
    }

    $.fn.weekpicker = function (data) {

        var selected_weeks = {};
        var container = $(this);
        var i;

        if ($(this).is('input[type=text]')) {
            var input = $(this);

            data = input.val().split(',');
            for (i in data) {
                data[i] = +data[i];
            }

            container = $('<div class="weekpicker">');
            input.hide().after(container);
        }

        for (i in data) {
            if (typeof(data[i]) == 'number' &&
                data[i] >= 1 &&
                data[i] <= LAST_WEEK) {
                selected_weeks[data[i]] = true;
            }
        }

        for (i = 1; i <= LAST_WEEK; i++) {
            var div = $('<div class="week">' + i + '</div>');
            div.appendTo(container);

            if (selected_weeks[i]) {
                div.toggleClass('marked');
            }
        }

        $('.week').click(function () {
            $(this).toggleClass('marked');
            var week = $(this).text();

            if (selected_weeks[week]) {
                delete selected_weeks[week];
            } else {
                selected_weeks[week] = true;
            }

            if (input) {
                input.attr('value', container.val().join(', '));
            }
        });

        container.val = function () {
            var selected_list = [];
            for (var week in selected_weeks) {
                selected_list.push(+week);
            }
            return selected_list;
        };

        return this;
    };

})(jQuery);

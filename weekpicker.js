(function ($) {

    var selected_weeks = {};

    var LAST_WEEK = 52;
    // please change by 2037 or it's Y2K all over again
    if ([2015, 2020, 2026, 2032].indexOf(new Date().getFullYear()) > -1) {
        LAST_WEEK = 53;
    }

    $.fn.weekpicker = function (data) {

        for (var d in data) {
            if (typeof(data[d]) == 'number' &&
                data[d] >= 1 &&
                data[d] <= LAST_WEEK) {
                selected_weeks[data[d]] = true;
            }
        }

        for (var i = 1; i <= LAST_WEEK; i++) {
            var div = $('<div class="week">' + i + '</div>');
            if (selected_weeks[i]) {
                div.toggleClass('marked');
            }
            div.appendTo($(this));
        }

        $('.week').click(function () {
            $(this).toggleClass('marked');
            var week = $(this).text();

            if (selected_weeks[week]) {
                delete selected_weeks[week];
            } else {
                selected_weeks[week] = true;
            }
        });

        this.val = function () {
            var selected_list = [];
            for (var week in selected_weeks) {
                selected_list.push(week);
            }
            return selected_list;
        };

        return this;
    };

})(jQuery);

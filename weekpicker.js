(function ($) {

    var selected_weeks = {};

    var LAST_WEEK = 52;
    // please change by 2037 or it's Y2K all over again
    if ([2015, 2020, 2026, 2032].indexOf(new Date().getFullYear()) > -1) {
        LAST_WEEK = 53;
    }

    $.fn.weekpicker = function () {

        for (var i = 1; i <= LAST_WEEK; i++) {
            $(this).append('<div class="week">' + i + '</div>');
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

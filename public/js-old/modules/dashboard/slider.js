/**
 * Created by karlvaniseghem on 4/06/15.
 */
function DashboardSliderCtrl() {
    $scope.$on('$viewContentLoaded', function() {

        //Revolution Slider
        if ($('.tp-banner').length) {
            var revolutionSlider = $('.tp-banner');
            alert('ok');
            if (revolutionSlider.closest('.rs-slider').hasClass('full-width')) {
                var body = $('body'),
                    width = body.width(),
                    topHeight = 0,
                    headerHeight = 104,
                    height;

                if ($('#top-box').length) {
                    if (body.hasClass('hidden-top')) {
                        topHeight = $('#top-box').outerHeight() - 32;
                    }
                }

                if ((body.width() + scrollWidth) >= 1200) {
                    height = body.height() - (topHeight + headerHeight);
                } else {
                    height = 800;
                }

                revolutionSlider.revolution({
                    delay: 6000,
                    startwidth: 1200,
                    startheight: height,
                    hideThumbs: 10,
                    navigationType: 'bullet',
                    navigationArrows: 'solo',
                    navigationHAlign: 'center',
                    navigationVAlign: 'top',
                    navigationHOffset: -545,
                    navigationVOffset: 30,
                    hideTimerBar: 'on'
                }).parents('.slider').removeClass('load');
            } else {
                revolutionSlider.revolution({
                    delay: 6000,
                    startwidth: 1200,
                    startheight: 500,
                    hideThumbs: 10,
                    navigationType: 'none',
                    onHoverStop: 'off'
                }).parents('.slider').removeClass('load');
            }
        }
    });
};


angular.module('portal')
    .controller('DashboardSliderCtrl', DashboardSliderCtrl);


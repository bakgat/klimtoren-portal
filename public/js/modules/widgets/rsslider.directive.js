/**
 * notosportal.widgets
 * DIRECTIVE: rsSlidr
 */
(function () {
    'use strict';

    angular
        .module('notosportal.widgets')
        .directive('rsSlider', rsSlider);

    /* @ngInject */
    function rsSlider($timeout) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            $timeout(function () {
                //Revolution Slider Start
                var revolutionSlider = element;

                if (revolutionSlider.closest('.rs-slider').hasClass('full-width')) {
                    var body = angular.element('body'),
                        width = body.width(),
                        topHeight = 0,
                        headerHeight = 104,
                        height;

                    if (angular.element('#top-box').length) {
                        if (body.hasClass('hidden-top'))
                            topHeight = angular.element('#top-box').outerHeight() - 32;
                    }

                    if ((body.width()) >= 1200)
                        height = body.height() - (topHeight + headerHeight);
                    else
                        height = 800;

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
                    }).parent().parent().removeClass('load');
                } else {
                    revolutionSlider.revolution({
                        delay: 6000,
                        startwidth: 1200,
                        startheight: 500,
                        hideThumbs: 10,
                        navigationType: 'none',
                        onHoverStop: 'off'
                    }).parent().parent().removeClass('load');
                }
            });
            //Revolution Slider End
        }
    }
})();


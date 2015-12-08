/**
 * notosportal.widgets
 * DIRECTIVE: blur
 */
(function () {
    'use strict';

    angular
        .module('notosportal.widgets')
        .directive('blur', blur);

    /* @ngInject */
    function blur($timeout) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            element.addClass('fwb-bg fwb-blur');

            $timeout(function () {

                var img = new Image(),
                    prependBox = '<div class="blur-box"/>';

                if (!element.find('canvas').length) {

                    if (attrs.image) {
                        img.src = attrs.image;
                    } else if (element.css('background-image') !== 'none') {

                        img.src = element.css('background-image')
                            .replace('url("', '').replace('")', '');
                        element.css('background-image', 'none');
                    }

                    img.onload = function () {
                        Pixastic.process(img, 'blurfast', {
                            amount: attrs.amount || 2
                        });
                    }

                    element
                        .prepend(prependBox)
                        .find('.blur-box')
                        .prepend(img);
                }

                $timeout(function () {
                    var canvas = element.find('canvas');

                    if (canvas.width() == element.width()) {
                        canvas.css({
                            marginLeft: 0,
                            marginTop: -((canvas.height() - element.height()) / 2)
                        });
                    } else {
                        canvas.css({
                            marginTop: 0,
                            marginLeft: -((canvas.width() - element.width()) / 2)
                        });
                    }

                    $('body').addClass('blur-load');
                }, 50);
            });
        }

    }
})();


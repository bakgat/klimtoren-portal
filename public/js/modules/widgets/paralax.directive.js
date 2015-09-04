/**
 * notosportal.widgets
 * DIRECTIVE: paralax
 */
(function () {
    'use strict';

    angular
        .module('notosportal.widgets')
        .directive('paralax', paralax);

    /* @ngInject */
    function paralax($timeout, $window) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            $timeout(function () {
                element.addClass('fwb-bg fwb-blur');
                var speed = attrs.speed || 3;

                function bgPosition() {
                    var $thisY = element.offset().top,
                        $windowY = $window.pageYOffset;

                    if ($thisY > $windowY)
                        element.css({backgroundPosition: '50% ' + (($thisY - $windowY) / speed) + 'px'});
                    else
                        element.css({backgroundPosition: '50% ' + (-($thisY - $windowY) / speed) + 'px'});
                }


                bgPosition();

                angular.element($window).bind('scroll', bgPosition);
            });
        }

    }
})();


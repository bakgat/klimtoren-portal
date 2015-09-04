/**
 * notosportal.widgets
 * DIRECTIVE: appearAnimation
 */
(function () {
    'use strict';

    angular
        .module('notosportal.widgets')
        .directive('appearAnimation', appearAnimation);

    /* @ngInject */
    function appearAnimation() {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element, attrs) {
            if (!angular.element('body').hasClass('no-csstransitions')) {
                $(element).bind('appear', appear);
            }
            function appear() {
                var delay = attrs.appearAnimationDelay || 1;
                if (delay > 1) {
                    $(element).css('animation-delay', delay + 'ms');
                }
                $(element).addClass('animated').addClass(attrs.appearAnimation);
            }
        }
    }
})();


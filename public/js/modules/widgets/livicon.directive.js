/**
 * notosportal.widgets
 * DIRECTIVE: livicon
 */
(function () {
    'use strict';

    angular
        .module('notosportal.widgets')
        .directive('livicon', livicon);

    /* @ngInject */
    function livicon() {
        var directive = {
            restrict: 'A',
            replace: true,
            scope: false,
            link: linkFunc
        };

        return directive;
        //////////////////////

        function linkFunc(scope, element) {
            element.addClass('livicon');
            element.addLivicon();
        }

    }
})();


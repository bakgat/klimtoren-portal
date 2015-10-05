/**
 * notosportal.meals
 * CONTROLLER: MenuController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.meals')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController(Menu) {
        /*jshint validthis: true */
        var vm = this;
        vm.mealsHtml = '';
        vm.mealsNotFound = false;

        activate();
        ///////////


        function activate() {
            Menu.getMenu().then(menuComplete);

            function menuComplete(data) {
                vm.mealsHtml = data;
            }
        }
    }
})();
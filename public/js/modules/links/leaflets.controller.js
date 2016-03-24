/**
 * notosportal.links
 * CONTROLLER: LeafletsController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.links')
        .controller('LeafletsController', LeafletsController);

    /* @ngInject */
    function LeafletsController(Leaflet) {
        /*jshint validthis: true */
        var vm = this;
        vm.leaflets = [];

        activate();
        /////////////

        function activate() {
            getLeaflets();
        }

        function getLeaflets() {
            return Leaflet.getList().then(leafletsComplete);

            function leafletsComplete(data) {
                console.log(data);
                vm.leaflets = data;
                return vm.leaflets;
            }
        }
    }
})();
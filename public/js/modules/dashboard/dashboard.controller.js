/**
 * notosportal.dashboard
 * CONTROLLER: DashboardController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.dashboard')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController(GPCollections, MailChimp) {
        /*jshint validthis: true */
        var vm = this;
        vm.facebookurl = 'https://www.facebook.com/vbsdeklimtoren';
        vm.collections = [];
        vm.campaigns = [];

        activate();
        ///////////

        function activate() {
            vm.collections = GPCollections.take(4);

            MailChimp.campaigns(3).then(function(response) {
                vm.campaigns = response;
            });


        }
    }
})();
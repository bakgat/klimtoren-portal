/**
 * notosportal.layout
 * CONTROLLER: ShellController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController(MailChimp, $state) {
        /*jshint validthis: true */
        var vm = this;

        vm.campaign_members = 0;
       // vm.hideBreadcrumb = $state.c;

        activate();
        /////////////


        function activate() {
            MailChimp.memberCount().then(function(response) {
                vm.campaign_members = response.data.stats.member_count;
            });
        }


    }


})();
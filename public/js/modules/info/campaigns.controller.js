/**
 * notosportal.info
 * CONTROLLER: CampaignsController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.info')
        .controller('CampaignsController', CampaignsController);

    /* @ngInject */
    function CampaignsController(MailChimp) {
        /*jshint validthis: true */
        var vm = this;
        vm.campaigns = [];

        activate();
        ////////////

        function activate() {
            MailChimp.campaigns().then(campaignsSuccess);

            function campaignsSuccess(response) {
                vm.campaigns = response;
            }

            MailChimp.mailToSegments().then(function(response) {
                console.log(response);
            });
        }


    }
})();
/**
 * notosportal.media
 * FACTORY: MailChimp
 */

(function () {
    'use strict';

    angular
        .module('notosportal.media')
        .factory('MailChimp', MailChimp);

    /* @ngInject */
    function MailChimp($http, $q) {
        var campaigns_cache = null;
        var service = {
            campaigns: campaigns,
            memberCount: memberCount
        }
        return service;
        ///////////////

        function campaigns(take) {


            return $http.get('/api/mailchimp/campaigns', {params: {take: take}})
                .success(campaignsSuccess);

            function campaignsSuccess(response) {
                return response.data;
            }
        }

        function memberCount() {
            return $http.get('/api/mailchimp/member_count')
                .success(memberCountSuccess);

            function memberCountSuccess(response) {
                return response.data;
            }
        }
    }
})();
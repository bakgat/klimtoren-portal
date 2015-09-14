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


            return $http.get('/api/mailchimp/campaigns'/*, {params: {take: take}} TAKE ALL NOW AS IT MUST BE FILTERED*/)
                .then(campaignsSuccess);

            function campaignsSuccess(response) {
                var result = [];
                var i = 0;
                angular.forEach(response.data.campaigns, function (campaign) {
                    if (!campaign.recipients.segment_opts) {
                        if (!i || i < take) {
                            result.push(campaign);
                            i++;
                        }
                    }
                });
                return result;
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
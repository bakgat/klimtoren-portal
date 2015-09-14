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

        var categories_cache = null;
        var interest_cache = null;

        var newsletter_id = 204325;

        var service = {
            campaigns: campaigns,
            mailToSegments: mailToSegments,
            memberCount: memberCount,
            interests: interests
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

        function mailToSegments() {
            return $http.get('/api/mailchimp/campaigns'/*, {params: {take: take}} TAKE ALL NOW AS IT MUST BE FILTERED*/)
                .then(campaignsSuccess);

            function campaignsSuccess(response) {
                var result = [];
                angular.forEach(response.data.campaigns, function (campaign) {
                    if (campaign.recipients.segment_opts) {
                        console.log(campaign.recipients.segment_opts);
                        result.push(campaign);
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

        function interests() {
            $http.get('/api/mailchimp/lists/' + newsletter_id + '/categories')
                .then(function (response) {
                    console.log(response);
                });

            // /lists/{list_id}/interest-categories/{category_id}/interests
        }
    }
})();
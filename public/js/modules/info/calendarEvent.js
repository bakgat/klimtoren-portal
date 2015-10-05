/**
 * notosportal.info
 * FACTORY: CalendarEvent
 */

(function () {
    'use strict';

    angular
        .module('notosportal.info')
        .factory('CalendarEvent', CalendarEvent);

    /* @ngInject */
    function CalendarEvent(HTTPCache, ProfileService, $q) {
        var service = {
            getList: getList
        }

        return service;
        ////////////////

        function getRealm() {
            return ProfileService.realmOfDomain('klimtoren.be')
                .then(getProfileComplete);

            function getProfileComplete(response) {
                return response;
            }
        }

        function getList() {
            var deferred = $q.defer();

            getRealm().then(getRealmComplete);

            function getRealmComplete(response) {
                HTTPCache.service('organization/' + response.id + '/calendar').getList()
                    .then(function(data) {
                        return deferred.resolve(data);
                    });
            }

            return deferred.promise;
        }

    }
})();
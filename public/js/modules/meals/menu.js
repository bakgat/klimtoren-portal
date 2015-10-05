/**
 * notosportal.meals
 * FACTORY: Menu
 */

(function () {
    'use strict';

    angular
        .module('notosportal.meals')
        .factory('Menu', Menu);

    /* @ngInject */
    function Menu($http, ProfileService, $q) {
        var cache = null;

        var service = {
            getMenu: getMenu
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

        function getMenu() {
            var deferred = $q.defer();

            getRealm().then(getRealmComplete);

            function getRealmComplete(response) {
                if (cache) {
                    return deferred.resolve(cache);
                } else {
                    $http.get('/api/organization/' + response.id + '/meals')
                        .then(function (response) {
                            cache = response.data;
                            return deferred.resolve(cache);
                        });
                }
            }

            return deferred.promise;
        }
    }
})();
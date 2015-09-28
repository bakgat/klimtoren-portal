/**
 * notosportal.auth
 * FACTORY: Profile
 */

(function () {
    'use strict';

    angular
        .module('notosportal.auth')
        .factory('ProfileService', ProfileService);

    /* @ngInject */
    function ProfileService($http, exception, $q, common, config) {
        var cache = null;
        var _realm = null;
        var events = config.events;

        var service = {
            current: current,
            realm: realm,
            setRealm: setRealm,
            realmOfDomain: realmOfDomain
        };

        return service;
        //////////////

        function current(forceRefresh) {
            if (cache && !forceRefresh) {
                //should return promise
                return $q.when(cache);
            }

            return $http.get('/api/user/profile')
                .then(getCurrentComplete)
                .catch(function (message) {
                    exception.catcher('Profiel van de huidige gebruiker opvragen, lukt niet.')(message);
                });


            function getCurrentComplete(response) {
                cache = response.data;
                service.setRealm(response.data.realm);
                return response.data;
            }

        }

        function realm() {
            return _realm; //synchronous, as async data was here at initialization
        }

        function setRealm(realm) {
            //realm.domain_name= realm.domain_name.replace(/\./g, '_');
            _realm = realm;

        }

        function realmOfDomain(domain, forceRefresh) {
            if (cache && !forceRefresh) {
                return $q.when(cache);
            }
            return $http.get('/api/realm?ofDomain=' + domain)
                .then(getOfDomainComplete)
                .catch(function (message) {
                    exception.catcher('Realm van ' + domain + ' opvragen lukt niet.')(message);
                });

            function getOfDomainComplete(response) {
                cache = response.data;
                service.setRealm(response.data);
                return response.data;
            }
        }
    }
})
();
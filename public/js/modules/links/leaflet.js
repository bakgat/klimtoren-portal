/**
 * notosportal.links
 * FACTORY: Leaflet
 */

(function () {
    'use strict';

    angular
        .module('notosportal.links')
        .factory('Leaflet', Leaflet);

    /* @ngInject */
    function Leaflet($q) {
        var leaflets = [
            {
                url: 'http://www.klimtoren.be',
                thumb: '/content/img/bednet/logo.png',
                name: 'Klimtoren',
                description: 'test'
            },
            {
                url: 'http://www.bednet.be',
                thumb: '/content/img/bednet/date.png',
                name: 'Bednet',
                description: 'een andere'
            },
        ]
        var service = {
            getList: getList
        }

        return service;
        ///////////////////

        function getList() {
            var deferred = $q.defer();

            deferred.resolve(leaflets);

            return deferred.promise;
        }
    }
})();
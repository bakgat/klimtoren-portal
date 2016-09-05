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
                url: '/content/documents/leaflets/balletschool-gistel-16-17.pdf',
                thumb: '/content/img/leaflets/balletschool-gistel-16-17.png',
                name: 'Gistelse balletschool',
                description: 'brochure 2016-2017',
                keywords: ['sport', 'dans']
            }
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
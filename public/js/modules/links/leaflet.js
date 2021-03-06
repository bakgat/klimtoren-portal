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
            },
            {
                url: '/content/documents/leaflets/DP-2016-2017.jpg',
                thumb: '/content/img/leaflets/DP-16-17.png',
                name: 'Dansplatoo',
                description: '(Fedes) brochure 2016-2017',
                keywords: ['sport', 'dans']
            },
            {
                url: 'http://www.danskant.be/index.html',
                thumb: '/content/img/leaflets/rigajigjig-16-17.jpg',
                name: 'Danskant vzw',
                description: 'aanbod 2016-2017',
                keywords: ['sport', 'dans']
            },
            {
                url: '/content/documents/leaflets/Folder-G-sport.pdf',
                thumb: '/content/img/leaflets/Folder-G-sport.png',
                name: 'Waterski',
                description: 'voor G-sporters',
                keywords: ['sport']
            },
            {
                url: '/content/documents/leaflets/DanzaDellArte-16-17.pdf',
                thumb: '/content/img/leaflets/DanzaDellArte-16-17.png',
                name: 'Danza dell\' Arté',
                description: 'Balletschool Brugge',
                keywords: ['sport', 'dans']
            },
            {
                url: '/content/documents/leaflets/krachtbal-16-17.jpg',
                thumb: '/content/img/leaflets/krachtbal-16-17.png',
                name: 'Krachtbal',
                description: 'KRB Jabbeke',
                keywords: ['sport']
            },
            {
                url: '/content/documents/leaflets/varya-16-17.pdf',
                thumb: '/content/img/leaflets/varya-16-17.png',
                name: 'Varya',
                description: 'Varsenare',
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
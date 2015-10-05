/**
 * notosportal.media
 * FACTORY: Video
 */

(function () {
    'use strict';

    angular
        .module('notosportal.media')
        .factory('Video', Video);

    /* @ngInject */
    function Video($q) {
        var videos = [
            {id: '_k8Zw9rYmB4', title: 'Onze zorgvisie'},
            {id: 'OEqAylOlIho', title: 'De Klimtoren Wave'},
            {id: 'JaGQQOCFq5s', title: 'Ice Bucket Challenge mevr. Rebekka'}
        ];


        var service = {
            getList: getList
        }

        return service;
        ////////////////

        function getList() {
            var deferred = $q.defer();

            deferred.resolve(videos);

            return deferred.promise;
        }

    }
})();
/**
 * notosportal.media
 * CONTROLLER: PhotoController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.media')
        .controller('PhotoController', PhotoController);

    /* @ngInject */
    function PhotoController(GPCollections) {
        /*jshint validthis: true */
        var vm = this;
        vm.collections = [];


        activate();

        /////////////

        function activate() {
            vm.collections = GPCollections.get();
        }
    }
})();
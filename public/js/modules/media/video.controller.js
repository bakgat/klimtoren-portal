/**
 * notosportal.media
 * CONTROLLER: VideoController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.media')
        .controller('VideoController', VideoController);

    /* @ngInject */
    function VideoController(Video) {
        /*jshint validthis: true */
        var vm = this;

        vm.videos = [];
        vm.src = src;

        activate();
        //////////////

        function activate() {
            Video.getList().then(videosComplete);

            function videosComplete(data) {
                vm.videos = data;
            }
        }
        function src(video) {
            return 'https://www.youtube.com/embed/' + video.id + '?showinfo=0&amp;wmode=opaque';
        }
    }
})();
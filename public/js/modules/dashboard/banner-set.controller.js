/**
 * notosportal.dashboard
 * CONTROLLER: BannersetController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.dashboard')
        .controller('BannersetController', BannersetController);

    /* @ngInject */
    function BannersetController(Blog) {
        /*jshint validthis: true */
        var vm = this;

        vm.blogs = [];

        activate();
        ///////////

        function activate() {

            Blog.getList().then(function (data) {
                vm.blogs = data;
                $(window).resize(); //trigger resize to call bannerSet Initialization
            });
        }
    }
})();
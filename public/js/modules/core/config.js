(function () {
    'use strict';

    var core = angular.module('notosportal.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.closeButton = true;
        toastr.options.progressBar = true;
        toastr.options.positionClass = 'toast-bottom-right';
    }




    var config = {
        appErrorPrefix: '[Fout] ',
        appTitle: 'VBS De Klimtoren',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    core.run(afterViewContentLoaded);

    /* @ngInject */
    function configure($urlRouterProvider, $stateProvider,
                       routehelperConfigProvider, $breadcrumbProvider,
                       RestangularProvider) {

        configureRouting();
        configureBreadcrumb();

        configureRestangular();


        function configureRouting() {
            routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
            routehelperConfigProvider.config.$stateProvider = $stateProvider;

            routehelperConfigProvider.config.title = config.appTitle;
        }

        function configureBreadcrumb() {
            $breadcrumbProvider.setOptions({
                prefixStateName: 'index',
                template: 'bootstrap3',
                includeAbstract: true
            });
        }

        function configureRestangular() {
            var baseUrl = '/api';

            RestangularProvider.setBaseUrl(baseUrl);
        }
    }

    /* @ngInject */
    function afterViewContentLoaded($rootScope) {
        $rootScope.$on('$viewContentLoaded',function(){
            $('html, body').animate({ scrollTop: 0 }, 200);
        })
    }
})();
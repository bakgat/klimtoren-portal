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

    core.run(set404);

    core.run(function(Analytics) {}); //Inject once for automatic page-tracking

    /* @ngInject */
    function configure($urlRouterProvider, $stateProvider,
                       routehelperConfigProvider, $breadcrumbProvider,
                       RestangularProvider, AnalyticsProvider) {

        configureRouting();
        configureBreadcrumb();

        configureRestangular();
        configureGoogleAnalytics();

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

        function configureGoogleAnalytics() {
            // Set a single account
            AnalyticsProvider.setAccount('UA-20593426-1');
            AnalyticsProvider.setPageEvent('$stateChangeSuccess');
        }
    }

    /* @ngInject */
    function afterViewContentLoaded($rootScope) {
        $rootScope.$on('$viewContentLoaded',function(){
            angular.element('html, body').animate({ scrollTop: 0 }, 200);
        })
    }

    /* @ngInject */
    function set404($rootScope) {
        $rootScope.$on('$stateChangeError', function(event) {
            event.preventDefault();
            $state.go('error.404');
        });
    }

})();
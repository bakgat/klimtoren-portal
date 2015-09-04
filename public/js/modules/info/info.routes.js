/**
 * ROUTES: notosportal.info
 */
(function () {
    'use strict';

    angular
        .module('notosportal.info')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'info',
                config: {
                    abstract: true,
                    url: '/info',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                    title: 'Info'
                }
            },
            {
                state: 'info.contact',
                config: {
                    url: '/contact',
                    views: {
                        'content@info': {
                            templateUrl: 'js/modules/info/contact.html'
                        }
                    },
                    title: 'Contact'
                }
            },
            {
                state: 'info.about',
                config: {
                    url: '/about',
                    views: {
                        'content@info': {
                            templateUrl: 'js/modules/info/about.html'
                        }
                    },
                    title: 'Over onze school'
                }
            },
            {
                state: 'info.care',
                config: {
                    url: '/care',
                    views: {
                        'content@info': {
                            templateUrl: 'js/modules/info/care.html'
                        }
                    },
                    title: 'Zorg op onze school'
                }
            },
            ,
            {
                state: 'info.campaigns',
                config: {
                    url: '/campaigns',
                    views: {
                        'content@info': {
                            templateUrl: 'js/modules/info/campaigns.html',
                            controller: 'CampaignsController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Nieuwsbrieven'
                }
            }
        ];
    };
})();
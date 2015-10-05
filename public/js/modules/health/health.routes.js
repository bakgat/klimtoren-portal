/**
 * ROUTES: notosportal.health
 */
(function () {
    'use strict';

    angular
        .module('notosportal.health')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'health',
                config: {
                    abstract: true,
                    url: '/health',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                }
            },
            {
                state: 'health.fruit',
                config: {
                    url: '/fruit',
                    views: {
                        'content@health': {
                            templateUrl: 'js/modules/health/fruit.html'
                        }
                    },
                    title: 'Fruit op school'
                }
            },
            {
                state: 'health.sports',
                config: {
                    url: '/sports',
                    views: {
                        'content@health': {
                            templateUrl: 'js/modules/health/sports.html'
                        }
                    },
                    title: 'Sport op school'
                }
            },
            {
                state: 'health.swimming',
                config: {
                    url: '/swimming',
                    views: {
                        'content@health': {
                            templateUrl: 'js/modules/health/swimming.html'
                        }
                    },
                    title: 'Zwemmen met school'
                }
            }
        ];
    };
})();
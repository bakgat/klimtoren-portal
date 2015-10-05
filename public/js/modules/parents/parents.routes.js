/**
 * ROUTES: notosportal.parents
 */
(function () {
    'use strict';

    angular
        .module('notosportal.parents')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'parents',
                config: {
                    abstract: true,
                    url: '/parents',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                }
            },
            {
                state: 'parents.pta',
                config: {
                    url: '/pta',
                    views: {
                        'content@parents': {
                            templateUrl: 'js/modules/parents/pta.html'
                        }
                    },
                    title: 'Ouderraad'
                }
            },,
            {
                state: 'parents.schoolboard',
                config: {
                    url: '/schoolboard',
                    views: {
                        'content@parents': {
                            templateUrl: 'js/modules/parents/schoolboard.html'
                        }
                    },
                    title: 'Schoolraad'
                }
            },
            {
                state: 'parents.read',
                config: {
                    url: '/read',
                    views: {
                        'content@parents': {
                            templateUrl: 'js/modules/parents/read.html'
                        }
                    },
                    title: 'Lees (groot)ouders'
                }
            },
            {
                state: 'parents.volunteers',
                config: {
                    url: '/volunteers',
                    views: {
                        'content@parents': {
                            templateUrl: 'js/modules/parents/volunteers.html'
                        }
                    },
                    title: 'Vrijwilligers'
                }
            }
        ];
    };
})();
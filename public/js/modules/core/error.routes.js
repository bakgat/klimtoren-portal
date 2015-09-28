/**
 * ROUTES: notosportal.core
 */
(function () {
    'use strict';

    angular
        .module('notosportal.core')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'error',
                config: {
                    abstract: true,
                    url: '/error',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                    title: 'Fout'
                }
            },
            {
                state: 'error.404',
                config: {
                    url: '/404',
                    views: {
                        'content@error': {
                            templateUrl: 'js/modules/core/errors/404.html'
                        },
                    },
                    title: 'Pagina in opbouw'
                }
            }
        ];
    };
})();
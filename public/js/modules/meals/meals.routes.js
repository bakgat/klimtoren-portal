/**
 * ROUTES: notosportal.meals
 */
(function () {
    'use strict';

    angular
        .module('notosportal.meals')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'meals',
                config: {
                    abstract: true,
                    url: '/meals',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                }
            },
            {
                state: 'meals.pricing',
                config: {
                    url: '/pricing',
                    views: {
                        'content@meals': {
                            templateUrl: 'js/modules/meals/pricing.html'
                        }
                    },
                    title: 'Prijzen'
                }
            },
            {
                state: 'meals.menu',
                config: {
                    url: '/menu',
                    views: {
                        'content@meals': {
                            templateUrl: 'js/modules/meals/menu.html',
                            controller: 'MenuController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'Menu'
                }
            }
        ];
    };
})();
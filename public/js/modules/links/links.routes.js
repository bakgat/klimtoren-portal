/**
 * ROUTES: notosportal.links
 */
(function () {
    'use strict';

    angular
        .module('notosportal.links')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'links',
                config: {
                    abstract: true,
                    url: '/links',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                    title: 'Links'
                }
            },
            {
                state: 'links.leaflets',
                config: {
                    url: '/leaflets',
                    views: {
                        'content@links': {
                            templateUrl: 'js/modules/links/leaflets.html'
                        }
                    },
                    title: 'Folders'
                }
            }
        ];
    };
})();
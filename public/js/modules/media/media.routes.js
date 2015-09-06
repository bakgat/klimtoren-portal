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
                state: 'media',
                config: {
                    abstract: true,
                    url: '/media',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                    title: 'in beeld'
                }
            },
            {
                state: 'media.photos',
                config: {
                    url: '/photos',
                    views: {
                        'content@media': {
                            templateUrl: 'js/modules/media/photos.html',
                            controller: 'PhotoController',
                            controllerAs: 'vm'
                        }
                    },
                    title: 'foto\'s'
                }
            }
        ];
    };
})();
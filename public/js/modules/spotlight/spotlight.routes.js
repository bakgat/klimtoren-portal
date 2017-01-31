/**
 * ROUTES: notosportal.spotlight
 */
(function () {
    'use strict';

    angular
        .module('notosportal.spotlight')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'spotlight',
                config: {
                    abstract: true,
                    url: '/spotlight',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/layout/main.html'
                        }
                    },
                }
            },
            {
                state: 'spotlight.stem',
                config: {
                    url: '/stem',
                    views: {
                        'content@spotlight': {
                            templateUrl: 'js/modules/spotlight/stem.html'
                        }
                    },
                    title: 'STEM'
                }
            },
            {
                state: 'spotlight.kiva',
                config: {
                    url: '/kiva',
                    views: {
                        'content@spotlight': {
                            templateUrl: 'js/modules/spotlight/kiva.html'
                        }
                    },
                    title: 'KiVa'
                }
            },
            {
                state: 'spotlight.diff',
                config: {
                    url: '/diff',
                    views: {
                        'content@spotlight': {
                            templateUrl: 'js/modules/spotlight/diff.html'
                        }
                    },
                    title: 'Contractwerk in de kleuterschool'
                }
            },
            {
                state: 'spotlight.lang',
                config: {
                    url: '/lang',
                    views: {
                        'content@spotlight': {
                            templateUrl: 'js/modules/spotlight/lang.html'
                        }
                    },
                    title: 'Nieuwe taalmethode'
                }
            },
            {
                state: 'spotlight.media',
                config: {
                    url: '/media',
                    views: {
                        'content@spotlight': {
                            templateUrl: 'js/modules/spotlight/media.html'
                        }
                    },
                    title: 'Leerplan media'
                }
            },
            {
                state: 'spotlight.readout',
                config: {
                    url: '/readout',
                    views: {
                        'content@spotlight': {
                            templateUrl: 'js/modules/spotlight/readout.html'
                        }
                    },
                    title: 'Voorleesweek 2015'
                }
            }
        ];
    };
})();
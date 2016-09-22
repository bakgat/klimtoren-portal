/**
 * ROUTES: notosportal.info
 */
(function () {
    'use strict';

    angular
        .module('notosportal.register')
        .run(configRoutes);

    /* @ngInject */
    function configRoutes(routehelper) {
        routehelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'careinfo',
                config: {
                    url: '/zorgavond',
                    views: {
                        'main@': {
                            templateUrl: 'js/modules/register/zorgavond.html'
                        }
                    },
                    title: 'Zorgavond'
                }
            }
        ];
    };
})();
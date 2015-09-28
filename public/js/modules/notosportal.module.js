(function () {
    'use strict';

    angular
        .module('notosportal', [
            //shared modules
            'notosportal.core',
            'notosportal.layout',
            'notosportal.widgets',
            'notosportal.data',
            'notosportal.auth',

            //app modules
            'notosportal.dashboard',
            'notosportal.info',
            'notosportal.media',
            'notosportal.links'
        ]);
})();
angular
    .module('notosportal.core', [
        //Angular
        'ngAnimate', 'ngSanitize', 'ngResource',

        //3rd party
        'ui.bootstrap',
        'ncy-angular-breadcrumb',
        'restangular',
        'angular-google-analytics',

        //cross app modules
        'blocks.exception',
        'blocks.logger',
        'blocks.router'
    ]);
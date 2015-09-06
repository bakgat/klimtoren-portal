/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('notosportal.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('gapi', gapi);
})();
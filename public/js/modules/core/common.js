/**
 * notosportal.core
 * FACTORY: common
 */

(function () {
    'use strict';

    angular
        .module('notosportal.core')
        .factory('common', common);

    function common($q, $rootScope, $timeout, logger) {

        var service = {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            // generic
            isNumber: isNumber,
            logger: logger,
            textContains: textContains
        }

        return service;
        ////////////////////////

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }


        function isNumber(val) {
            // negative or positive
            return (/^[-]?\d+$/).test(val);
        }

        function textContains(text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }
    }
})();
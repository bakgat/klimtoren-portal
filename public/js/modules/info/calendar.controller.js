/**
 * notosportal.info
 * CONTROLLER: CalendarController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.info')
        .controller('CalendarController', CalendarController);

    /* @ngInject */
    function CalendarController(CalendarEvent, moment) {
        /*jshint validthis: true */
        var vm = this;

        var indexes = [],
            colors = ['bg-success', 'bg-info', 'bg-danger', 'bg-warning'];

        vm.events = [];
        vm.randomColor = randomColor;


        activate();
        ///////////////

        function activate() {
            getCalendarEvents();
        }

        function getCalendarEvents() {
            return CalendarEvent.getList().then(calendarEventsComplete);

            function calendarEventsComplete(data) {
                //angular.copy($scope.data, $scope.testData);
                vm.events = convertTo(data, 'start', true);
                return vm.events;
            }
        };

        function convertTo(arr, key, dayWise) {
            var groups = {};
            var l = arr.length;
            for (var i = 0; i < l; i++) {
                var local = moment.utc(arr[i][key]).format('DD MMMM YYYY');
                //if (dayWise) {

                //console.log(local);
                //arr[i][key] = arr[i][key].toLocaleDateString();
                //}
                // else {
                //     arr[i][key] = arr[i][key].toTimeString();
                //}
                groups[local] = groups[local] || [];
                groups[local].push(arr[i]);
            }
            return groups;
        };

        function randomColor(index) {
            if (!indexes[index]) {
                var rnd = Math.floor(Math.random() * colors.length + 1);
                //not same as previous
                while(index > 0 && indexes[index-1] === colors[rnd]) {
                    rnd = Math.floor(Math.random() * colors.length + 1);
                }
                indexes[index] = colors[rnd];
            }
            console.log(indexes[index]);
            return indexes[index];
        }
    }
})();
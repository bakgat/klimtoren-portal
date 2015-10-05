/**
 * notosportal.info
 * CONTROLLER: RegisterController
 */
(function () {
    'use strict';

    angular
        .module('notosportal.info')
        .controller('RegisterController', RegisterController);

    /* @ngInject */
    function RegisterController(EntryDate, $scope) {
        /*jshint validthis: true */
        var vm = this;

        vm.birthday = new Date();
        vm.nextRegisterDate = null;
        vm.dateStatus = {
            opened: false
        };
        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        }

        vm.calculate = calculate;
        vm.openDate = openDate;

        $scope.$watch('vm.birthday', calculate);

        activate();
        /////////////

        function activate() {

        }

        function calculate() {

            var d = EntryDate.calculate(vm.birthday);
            if (d) {
                vm.nextRegisterDate = d;
                vm.canGo = false;
            } else {
                vm.nextRegisterDate = null;
                vm.canGo = true;
            }
        }

        function openDate($event) {
            vm.dateStatus.opened = true;
        }
    }
})();
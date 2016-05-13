(function() {
    'use strict';

    function MortgageController(
        // mortgageService
    ){
        var vm = this;

        function changeIncomeResult() {
            if(parseInt(vm.incomePartner) < parseInt(vm.income)) {
                vm.incomeResultAmount = parseInt(vm.income) - Math.round(Math.random() * 10000);
            }
            else {
                vm.incomeResultAmount = parseInt(vm.income) + Math.round(Math.random() * 10000);
            }
        }

        vm.changeIncomeResult = changeIncomeResult;

        vm.income = 25000;
        vm.incomePartner = 0;
        vm.incomeResultAmount = 87300;


        function init() {

        }

        init();


    }

    MortgageController.$inject = [
        'mortgage.mortgageService'
    ];

    angular
        .module('app.mortgage')
        .controller('MortgageController', MortgageController);

}());
(function() {
    'use strict';
    
    angular
        .module('app.mortgage')
        .controller('mortgage.mortgageController', MortgageController);

    MortgageController.$inject = [
        'mortgage.mortgageService'
    ];

    function MortgageController(
        mortgageService
    ){
       var vm = this;

        vm.changeIncomeResult = changeIncomeResult;

        vm.income = 25000;
        vm.incomePartner = 0;
        vm.incomeResultAmount = 87300;

        function changeIncomeResult() {
            if(parseInt(vm.incomePartner) < parseInt(vm.income)) {
                vm.incomeResultAmount = parseInt(vm.income) - Math.round(Math.random() * 10000);
            }
            else {
                vm.incomeResultAmount = parseInt(vm.income) + Math.round(Math.random() * 10000);
            }
        }

        init();

        function init() {

        }
    }
}());
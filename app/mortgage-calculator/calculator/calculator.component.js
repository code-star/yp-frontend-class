(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('calculator', {
			templateUrl: 'app/mortgage-calculator/calculator/calculator.html',
			controllerAs: 'vm',
			controller: CalculatorController
		});

	CalculatorController.$inject = ['$scope', 'MaxMortgageService'];
	function CalculatorController($scope, MaxMortgageService) {
		var vm = this;

		vm.$onInit = function() {
			vm.changeIncomeResult = changeIncomeResult;
			vm.income = 25000;
			vm.incomePartner = 0;
			setUpIncomeWatch();
		};

		function setUpIncomeWatch() {
			$scope.$watch(function() {
				return vm.income + '-' + vm.incomePartner;
			}, changeIncomeResult)
		}

		function handleMaxToLoanResponse(response) {
			vm.incomeResultAmount = response.maxToLoan;
		}

		function changeIncomeResult() {
			console.log('in change');
			var income = parseInt(vm.income),
				partnerIncome = parseInt(vm.incomePartner);

			MaxMortgageService.calculateMaxToLoan(income, partnerIncome).then(handleMaxToLoanResponse);
		}
	}
})();

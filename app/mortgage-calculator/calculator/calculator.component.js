(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('calculator', {
			templateUrl: 'app/mortgage-calculator/calculator/calculator.html',
			controllerAs: 'vm',
			controller: CalculatorController
		});

	CalculatorController.$inject = ['$scope', '$timeout', 'MaxMortgageService'];
	function CalculatorController($scope, $timeout, MaxMortgageService) {
		var vm = this, ignoreIncomeModelUpdate = false, timeoutPromise;

		vm.$onInit = function() {
			vm.changeIncomeResult = changeIncomeResult;
			vm.income = 25000;
			vm.incomePartner = 0;
			setUpIncomeWatch();
		};

		function setUpIncomeWatch() {
			$scope.$watch(function() {
				return vm.income + '-' + vm.incomePartner;
			}, function() {
				if(ignoreIncomeModelUpdate) {
					ignoreIncomeModelUpdate = false;
				} else {
					if (!timeoutPromise) {
						queueRequest();
					} else {
						$timeout.cancel(timeoutPromise);
						queueRequest();
					}
				}
			});
		}

		function queueRequest() {
			timeoutPromise = $timeout(changeIncomeResult, 600);
		}

		function handleMaxToLoanResponse(response) {
			vm.incomeResultAmount = response.maxToLoan;
		}

		function changeIncomeResult() {
			var income = parseInt(vm.income),
				partnerIncome = parseInt(vm.incomePartner);

			MaxMortgageService.calculateMaxToLoan(income, partnerIncome).then(handleMaxToLoanResponse);
		}
	}
})();

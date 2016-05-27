(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('calculator', {
			templateUrl: 'app/mortgage-calculator/calculator/calculator.html',
			controllerAs: 'vm',
			controller: [function () {
				var vm = this;

				vm.changeIncomeResult = changeIncomeResult;

				vm.income = 25000;
				vm.incomePartner = 0;
				vm.incomeResultAmount = 87300;

				function changeIncomeResult() {
					var income = parseInt(vm.income),
						partnerIncome = parseInt(vm.incomePartner);

					vm.incomeResultAmount = (income + partnerIncome) * 4.5;
				}

				init();

				function init() {

				}
			}]
		});
})();

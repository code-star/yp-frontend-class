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
			}]
		});
})();

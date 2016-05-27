(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('responsive', {
			templateUrl: 'app/mortgage-calculator/rente/rente.html',
			controllerAs: 'vm',
			controller: [function () {
				var vm = this;

				vm.changeMortgage = changeMortgage;

				vm.mortgage = 180000;
				changeMortgage();

				function changeMortgage() {
					var mortgage = parseInt(vm.mortgage);

					vm.interestPerYear = Math.floor((mortgage * 0.021) / 12);
				}

				init();

				function init() {

				}
			}]
		});

})();

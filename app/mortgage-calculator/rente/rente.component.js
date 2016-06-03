(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('rente', {
			templateUrl: 'app/mortgage-calculator/rente/rente.html',
			controllerAs: 'vm',
			controller: RenteController
		});

	function RenteController() {
		var vm = this;

		vm.$onInit = function() {
			vm.changeMortgage = changeMortgage;
			vm.mortgage = 180000;
			changeMortgage();
		};

		function changeMortgage() {
			var mortgage = parseInt(vm.mortgage);
			vm.interestPerYear = Math.floor((mortgage * 0.021) / 12);
		}
	}

})();

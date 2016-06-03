(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('rente', {
			templateUrl: 'app/mortgage-calculator/rente/rente.html',
			controllerAs: 'vm',
			controller: RenteController
		});

	RenteController.$inject = ['IntrestService'];
	function RenteController(IntrestService) {
		var vm = this;

		vm.$onInit = function() {
			vm.changeMortgage = changeMortgage;
			vm.mortgage = 180000;
			loadInterest();
		};

		function loadInterest() {
			IntrestService.getIntrest().then(function(response) {
				vm.interest = response.currentRate;
				changeMortgage();
			});
		}

		function changeMortgage() {
			var mortgage = parseInt(vm.mortgage);
			vm.interestPerYear = Math.floor((mortgage * (vm.interest / 100) / 12));
		}
	}
})();

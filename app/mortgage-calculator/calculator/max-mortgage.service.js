(function() {
	'use strict';

	angular
		.module('mortgage-calculator')
		.factory('MaxMortgageService', MaxMortgageService);

	MaxMortgageService.$inject = ['$http'];
	function MaxMortgageService($http) {
		return {
			calculateMaxToLoan: calculateMaxToLoan
		};

		function calculateMaxToLoan(income, partnerIncome) {
			return $http({
				method: 'GET',
				url: 'http://agile-wave-86684.herokuapp.com/max-to-loan',
				params: {
					income1: income,
					income2: partnerIncome
				}
			}).then(function (response) {
				return response.data;
			});
		}
	}
}());

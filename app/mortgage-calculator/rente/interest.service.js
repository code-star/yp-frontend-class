(function() {
	'use strict';

	angular
		.module('mortgage-calculator')
		.factory('InterestService', InterestService);

	InterestService.$inject = ['$http'];
	function InterestService($http) {
		return {
			getInterest: getInterest
		};

		function getInterest() {
			return $http({
				method: 'GET',
				url: 'http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate'
			}).then(function (response) {
				return response.data;
			});
		}
	}
}());

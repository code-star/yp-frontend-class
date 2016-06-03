(function() {
	'use strict';

	angular
		.module('mortgage-calculator')
		.factory('IntrestService', IntrestService);

	IntrestService.$inject = ['$http'];
	function IntrestService($http) {
		return {
			getIntrest: getIntrest
		};

		function getIntrest() {
			return $http({
				method: 'GET',
				url: 'http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate'
			}).then(function (response) {
				return response.data;
			});
		}
	}
}());

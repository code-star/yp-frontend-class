(function () {
	'use strict';

	angular
		.module('mortgage-calculator')
		.component('mortgageCalculator', {
			templateUrl: 'app/mortgage-calculator/mortgage-calculator.html',
			$routeConfig: [
				{path: '/calculator', name: 'Calculator', component: 'calculator', useAsDefault: true},
				{path: '/about', name: 'About', component: 'about' },
				{path: '/responsive', name: 'Responsive', component: 'responsive' }
			]
		});

})();

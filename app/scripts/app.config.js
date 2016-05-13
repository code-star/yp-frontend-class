(function() {
    'use strict';
    var config = {
        appTitle: 'Frontend YP class',
        version: '1.0.0'
    };
    function configure($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../partials/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('mortgage', {
                url: '/mortgage',
                templateUrl: '../partials/mortgage.html',
                controller: 'MortgageController',
                controllerAs: 'mortgage'

            })
            .state('responsive', {
                url: '/responsive',
                templateUrl: '../partials/responsive.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../partials/about.html'
            });

        $urlRouterProvider.otherwise('/');
    }

    angular
        .module('app')
        .value('config', config)
        .config(configure);
}());
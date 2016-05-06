(function() {
    'use strict';
    var config = {
        appTitle: 'Frontend YP class',
        version: '1.0.0'
    };

    angular
        .module('app')
        .value('config', config)
        .config(configure);



    function configure($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/partials/home.html',
                controller: 'Shell'
            })
            .state('mortgage', {
                url: '/mortgage',
                templateUrl: 'app/mortgage/mortgage.html'
            })
            .state('responsive', {
                url: '/responsive',
                templateUrl: 'app/partials/responsive.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/partials/about.html'
            });

        $urlRouterProvider.otherwise("/");
    }
}());
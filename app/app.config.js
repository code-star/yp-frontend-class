(function() {
    'use strict';
    var config = {
        appTitle: 'Frontend YP class',
        version: '1.0.0'
    };

    angular
        .module('app')
        .value('config', config)
        .value('$routerRootComponent', 'mortgageCalculator');
}());

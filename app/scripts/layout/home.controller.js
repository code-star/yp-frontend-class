
(function() {
    'use strict';

    function HomeController(config) {
        var vm = this;
        vm.title = config.appTitle;
    }

    HomeController.$inject = ['config'];

    angular
        .module('app.layout')
        .controller('HomeController', HomeController);

})();
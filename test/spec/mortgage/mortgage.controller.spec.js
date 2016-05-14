'use strict';

// see http://jasmine.github.io/2.1/introduction.html for docs

describe('controller: MortgageController', function(){
    // load the controller's module
    beforeEach(module('app'));

    var LoginCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        LoginCtrl = $controller('MortgageController', {
            $scope: scope
        });
    }));

    it('should always pass', function(){
        expect(true).toBe(true);
    });
});

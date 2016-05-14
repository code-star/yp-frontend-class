'use strict';

// see http://jasmine.github.io/2.1/introduction.html for docs

describe('controller: MortgageController', function(){
    // load the controller's module
    beforeEach(module('app'));

    var MortgageController, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        MortgageController = $controller('MortgageController', {
            $scope: scope
        });
    }));

    it('should contain the correct default values for income', function(){
        expect(MortgageController.income).toBe(25000);
        expect(MortgageController.incomePartner).toBe(0);
        expect(MortgageController.incomeResultAmount).toBe(87300);
    });
});

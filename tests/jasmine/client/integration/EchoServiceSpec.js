describe('Echo service', function() {

    'use strict';

    var $injector = angular.injector(['todomvc', 'angular-meteor', 'ng']);
    var EchoService = $injector.get('EchoService');

    it('should have working test suite', function() {
        expect(it).toBeDefined();
    });

    it('should be instantiated', function() {
        expect(EchoService).toBeDefined();
    });

    /*it('should have method "echo"', function() {
        expect(typeof EchoService.echo).toBe('function');
    });

    it('test input for string "Test"', function(done) {
        var testResult = function(result) {
            expect(result).toBe("Test...Test");
        }

        var failTest = function(error) {
            expect(error).toBeUndefined();
        }

        EchoService.echo('Test')
            .then(testResult)
            .catch(failTest)
            .finally(done);

    });*/
});
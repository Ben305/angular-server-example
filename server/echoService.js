angular.module('todomvc').service('EchoService', function() {
    this.echo = function(input) {
        return input + '...' + input;
    }
});
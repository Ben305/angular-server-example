angular.module('todomvc').config(function(ServerAPIProvider, $injector) {
  if($injector.has('Data')) {
    ServerAPIProvider.register('Data');
  }
  if($injector.has('EchoService')) {
    ServerAPIProvider.register('EchoService');
  }
});

angular.bootstrap(['todomvc']);
var app = angular.module("videoclubApp", ['ngRoute', 'peliculasComponent']);

app.controller('appController', function($scope) {

    $scope.title ="Videoclub";
});

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix(''); 
        $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
          });

  $routeProvider.otherwise({redirectTo: '/'});
 }]);
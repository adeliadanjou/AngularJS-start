var peliculas = angular.module("peliculasComponent", []);

peliculas.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "peliculas/peliculas.html",
        controller: "peliculasController"
    });
});

peliculas.controller("peliculasController", function($scope){
    
});

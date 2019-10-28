# PRIMEROS PASOS:

0) npm init para crear package.json
1) crear una carpeta app y dentro meter app.js, index.html, app.css

- index.html:

a) Creamos con ! un documento html
b) le ponemos en la etiqueta <html ng-app="videoclubApp">
c) añadimos los siguientes scripts y link:

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-route.js"></script>
<script src="app.js"></script>
<link rel="stylesheet" href="app.css">

d) ponemos dentro del body:

  <body ng-controller='appController'></body>

- app.js:

a) Iniciamos la app:

   var app = angular.module("videoclubApp", []);

b) Iniciamos controlador de index.html:

   app.controller('appController', ['$scope', function($scope){}])


# ACTIVAR RUTAS:

- index.html: 
1) Ponemos el siguiente script, que es instalar lo de las rutas -->      
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-route.js"></script>

2) también un ng-view en un div (es como el router-outlet)

<div ng-view></div>

3) dentro del <head>   AQUÍ   </head> hay que ponerle la url base que queremos en nuestra aplicacion:

<head>   <base href="http://localhost/videoclub/app/"/> </head>

- app.js: 

1) Ponemos 'ngRoute' en nuestro var app = angular.module("videoclubApp", []) para activar las rutas 

  * var app = angular.module("videoclubApp", ['ngRoute']); 

2) Agregamos el app.config:
Básicamente el locationProvider es para quitarle el ! y el # que trae por defecto la app de AngularJS.
El routeProvider es para hacer las rutas.
El otherwise para si no está la ruta que pasamos en la url, redireccionar a lo que sea.

  * app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix(''); 
        $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
          });

  $routeProvider.otherwise({redirectTo: '/'}); }]);

···· AHORA EN LOS COMPONENTES:

 - peliculas.js:

 1) Hacemos el archivo de configuración para establecer la ruta que tendrá, el templateUrl que usaremos y el controllador

 * peliculas.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "peliculas/peliculas.html",
        controller: "peliculasController"
    });});

2) Le decimos cómo se llama el controller y hacemos la function que tendrá todas las movidas de js que tendrá el componente en cuestión:

 * peliculas.controller("peliculasController", function($scope){  });

3) Esos componentes tenemos que enlazarlos con app.js, para ello vamos a app.js y los ponemos en el app.module:

 * var app = angular.module("videoclubApp", ['ngRoute', 'peliculasComponent', 'otroComponente', 'otroMás']);
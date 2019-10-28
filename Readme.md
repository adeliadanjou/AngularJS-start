# PRIMEROS PASOS:

0) npm init para crear package.json
1) crear una carpeta app y dentro meter app.js, index.html, app.css

- index.html:

a) Creamos con ! un documento html
b) le ponemos en la etiqueta <html ng-app="app">
c) añadimos los siguientes scripts y link:

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-route.js"></script>
<script src="app.js"></script>
<link rel="stylesheet" href="app.css">

- app.js:

a) Iniciamos la app:

   --> var app = angular.module("app", []);

b) Iniciamos controlador de index.html:

   --> app.controller('appController', ['$scope', function($scope){}])

- index.html:

a) ponemos dentro del body:

  <body ng-controller='appController'></body>



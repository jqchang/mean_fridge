var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UsersController',
  })
  .when('/home', {
    templateUrl: 'partials/dashboard.html',
    controller: 'UsersController',
  })
})

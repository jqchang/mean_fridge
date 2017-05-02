var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/' {
    templateUrl: 'partials/dashboard.html',
    controller: 'UsersController',
  })
})

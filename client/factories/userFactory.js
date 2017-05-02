app.factory('userFactory', function($http) {
  var factory = {};
  var users = [];

  factory.getUsers = function(callback) {
    $http.get('/users', {}).then(function(response){
      users = response.data;
      callback(users);
  }, function() {
    console.log("Error: could not load /users");
  }
})

app.factory('userFactory', function($http) {
  var factory = {};
  var users = [];

  factory.index = function(callback) {
    $http.get('/users', {}).then(function(response){
      users = response.data;
      callback(users);
    }, function() {
      console.log("Error: could not load /users");
    })
  }

  factory.login = function(user, callback) {
    $http.post('/login', user).then(function(response){
      console.log("response: ", response);
      callback(response.data);
    }, function() {
      console.log("Login server is unavailable. Please try again later.")
      callback({success:false, errors:"Login server is unavailable. Please try again later."})
    })
  }

  return factory;
})

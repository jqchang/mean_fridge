console.log("users controller");
app.controller('UsersController', ['$scope', '$routeParams', 'userFactory', function($scope, $routeParams, userFactory) {
  $scope.users = [];
  $scope.errors =[];
  $scope.loginUser = {};
  $scope.registerUser = {};
  $scope.ordering = '-createdAt';

  userFactory.index(function(data) {
    if(!data.errors) {
      $scope.users = data;
    }
    else {
      $scope.errors = ['Could not retrieve user list'];
    }
  })
  $scope.login = function() {
    userFactory.login($scope.loginUser, function(data) {
      console.log(data);
      if(data.success) {
        console.log("Login successful!");
      }
      else {
        console.log(data.errors);
        $scope.errors = data.errors;
      }
    });
  }
}])

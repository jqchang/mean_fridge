app.controller('UsersController', ['$scope', '$routeParams'], function($scope, $routeParams) {
  $scope.users = [];
  $scope.ordering = '-createdAt';

  userFactory.index(function(data) {
    if(!data.errors) {
      $scope.users = data;
    }
    else {
      $scope.errors = ['Could not retrieve user list'];
    }
  })
}])

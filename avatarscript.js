angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
  
  // tada! a users array will now be bound to and made available to our html template
  $scope.users = [];
  
  /**
   * 1. We push an new `user` object to our users list with a name
   * and avatarUrl property
   * 2. For our purposes, a quick and dirty method for clearing the form will due.
   * Just note there is a more appropriate method when form validation is involved.
   */
  $scope.addNew = function (user) {
    $scope.users.push({ 
      name: user.name,
      avatarUrl: user.url
    }); /* [1] */
    
    user.name = ''; /* [2] */
    user.url = ''; /* [2] */
  };
}

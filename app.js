angular.module('News', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
     $scope.posts = [
      {title:'Post 1', upvotes:5},
      {title:'Post 2', upvotes:6},
      {title:'Post 3', upvotes:1},
      {title:'Post 4', upvotes:4},
      {title:'Post 5', upvotes:3}
    ];
  }
]);


angular.module('app', []).controller('mainCtrl', [
  '$scope',function($scope){
      $scope.cuplist = [{"cupimage":'#temp1',"style":'#cup1',"cupbutton":"#cup1btn"},
                        {"cupimage":'#temp2',"style":'#cup2',"cupbutton":"#cup2btn"},
                       {"cupimage":'#temp3',"style":'#cup3',"cupbutton":"#cup3btn"}];
      
      $scope.shuffle = function() {
          $('#shuffle').text("Shuffled!");
          for(var i=0; i<3; i++) {
             $($scope.cuplist[i].cupimage).attr('src','http://www.clker.com/cliparts/c/v/W/h/v/Z/silver-cup-md.png');
             $($scope.cuplist[i].style).css('padding-top','1%');
             $($scope.cuplist[i].style).css('padding-bottom','2.5%');
          $($scope.cuplist[i].cupbutton).text("Pick this one!");
          } 
      };
    
      $scope.picked = function(cupNumber,btn){
          
          var j = Math.floor((Math.random() * 3));
        console.log(j);
        console.log(cupNumber);
          if (j==cupNumber)
          {
            
            $(btn).text('Yay!');
          }    
          else{
             $(btn).text('Aww :(');
          }
          $($scope.cuplist[j].cupimage).attr('src','http://shops.clubpenguinwiki.info/static/images/shops/thumb/c/ca/Toy_Story_Ball.png/120px-Toy_Story_Ball.png');
          $($scope.cuplist[j].style).css('padding-top','15%');
          $($scope.cuplist[j].style).css('padding-bottom','3%');
          $('#shuffle').text("Shuffle!");
      };
    
  }
]);





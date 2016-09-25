console.log('js sourced');

var myApp = angular.module('myApp', []);
var allPets = [];
//create function to send new pet information to the server
myApp.controller('petsController', ['$scope', '$http', function($scope, $http){
  console.log('NG');
  $scope.newPet = function(){
    console.log('in newPet');
    //create object to pass to server of pet info
    var newInput={
      petName: $scope.petName,
      animal: $scope.animal,
      age: $scope.age,
      picture: $scope.picture
    };
    //this.product = newInput;

   $scope.petName = null;
   $scope.animal = null;
   $scope.age = null;
   $scope.picture = null;
   $http({
      method: 'POST',
      url: '/pets',
      data: newInput
    }).then(function(response){
      console.log('this is from the server', response);

      // $scope.displayName = response.data.student_name;
      // $scope.displayScore = response.data.score;
      // $scope.displayAssignmentNumber = response.data.assignment_number;
      // $scope.displayDate = response.data.date_completed.substring(0,10);

    });
  };
}]);

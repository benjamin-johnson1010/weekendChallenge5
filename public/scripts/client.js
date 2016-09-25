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
  };
}]);

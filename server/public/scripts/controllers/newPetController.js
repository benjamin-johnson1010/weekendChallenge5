
//create function to send new pet information to the server
myApp.controller('newPetController', ['$scope', '$http', function($scope, $http){
  $scope.newPet = function(){
    console.log('in newPet');
    //create object to pass to server of pet info
    var newInput={
      petName: $scope.petName,
      animal: $scope.animal,
      age: $scope.age,
      picture: $scope.picture
    };
    //set input fields back to blank
   $scope.petName = null;
   $scope.animal = null;
   $scope.age = null;
   $scope.picture = null;
   //send newInput data to server
   $http({
      method: 'POST',
      url: '/pets',
      data: newInput
    }).then(function(response){
      console.log('this is from the server', response);
//display the new pet on DOM
      $scope.displayName = 'Name: ' + response.data.petName;
      $scope.displayAnimal = 'Animal: ' + response.data.animal;
      $scope.displayAge = 'Age: ' + response.data.age;
      $scope.displayPicture = response.data.picture;
    });
  };
}]);

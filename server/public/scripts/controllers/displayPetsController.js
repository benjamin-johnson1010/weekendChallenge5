myApp.controller('displayPetsController', ["$scope", '$http', function($scope, $http){
console.log('in displayPetsController');
    $scope.displayPet = function(){
    console.log('in displayPet');
      //call to get the pets in the database
     $http({
        method: 'GET',
        url: '/pets',
      }).then(function(response){
        $scope.allPets = response.data;
        console.log('this is from the server', $scope.allPets);

      });
    };
  }]);

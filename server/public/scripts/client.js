console.log('js sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/addPet", {
        templateUrl: "/views/partials/addPet.html",
        controller: "newPetController"
      }).
      when("/displayPet", {
        templateUrl: "/views/partials/displayPet.html",
        controller: "displayPetsController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);

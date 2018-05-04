//teste Rafael
(function () {

	"use strict"
	
	angular.module('FrontEndProject', ['ui.router', 'ngResource']).config(['$stateProvider', config]);

	function config($stateProvider) {
        var petState = {
            name: 'pet',
            url: '/pet',
            controller: 'PetController',
            controllerAs: 'petController',
            templateUrl: '/pet/petIndex.html'
          }                 
          $stateProvider.state(petState);		
	}

})();
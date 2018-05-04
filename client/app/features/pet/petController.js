//teste Rafael22222
(function () {

	"use strict"

	angular.module('FrontEndProject').controller('PetController', PetController);
	PetController.$inject = ['petService'];

	function PetController(petService) {
		const self = this;
		
		petService.getPet().execute({id:4}).$promise.then(data => {
			self.pet = data;
		}, error =>{
			console.log(error);
		});

	}
})();
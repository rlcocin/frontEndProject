(function () {

    'use strict';
    var API_URL =  "http://localhost:3000" + "/pet/:id";

    angular.module('FrontEndProject').factory('petService', petService);
    petService.$inject = ['$resource'];

    function petService($resource) {
        return {
            getPet: function () {
                return $resource(API_URL, {id: '@id'}, {
                    execute: {
                        method: 'GET'                     
                    }
                });
            }
        };
    }
})();
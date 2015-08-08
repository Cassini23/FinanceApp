/**
 *1 Factory declared that returns a Singleton service to caller
 * 2 uses $http to set get request and returns the promise object, which is later result by the directive
 */

(function(){
    angular.module('financeApp')
        .factory('httpFactory', httpFactory);
        //.factory('processFactory', processFactory);

    function httpFactory($http, $q){
        var service ={};

        service.read = function(){
            return $http.get('data/products.json');
        };
        return service;
    }


}());
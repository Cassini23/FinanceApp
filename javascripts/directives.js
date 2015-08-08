/**1 Directive restricted to be used either as Element or Attribute
 * 2 Directive is linked to an external template bound by templateUrl
 * 3 Directive controller inherits the mainController scope and has access to $scope.result;
 * 4 Uses the factory httpFactory to get data using $http
 * 5 Data returned is resolved in the template _outputResult.html
 * */

(function(){
   angular.module('financeApp')
       .directive('result', result);
    function result(){
        return{
            restrict: 'AE',
            templateUrl:'partials/_outputResult.html',
            controller: function($scope, httpFactory){
                httpFactory.read().success(function(data){
                    $scope.results = data["products"];
                }).error(function(error){
                    $scope.results = error;
                });
            }
        }
    }
}());
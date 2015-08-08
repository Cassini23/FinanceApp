/*
* mainController attached with scope, is outer controller in the application
* */
(function(){
   angular.module('financeApp')
       .controller('mainController', mainController)
       .controller('resultController', resultController);
    function mainController($scope){
        $scope.results = [];
        $scope.searchText = '';
    }

    /**
     * Controller for the result directive,
      * @param $scope
     * @param httpFactory
     */
    function resultController($scope, httpFactory){
            httpFactory.read().success(function(data){
                $scope.results = data["products"];
            }).error(function(error){
                $scope.results = error;
            });
    }

}());
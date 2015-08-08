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
}());
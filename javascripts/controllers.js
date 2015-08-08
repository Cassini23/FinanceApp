/*
* mainController attached with scope, is outer controller in the application
* */
(function(){
   angular.module('financeApp')
       .controller('mainController', mainController);
    function mainController($scope){
        $scope.results = [];
        $scope.searchText = '';
    }

}());
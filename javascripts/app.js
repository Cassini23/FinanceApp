/*Bootstrapping angular automatically, one can also add a .config stage for preliminary or standardized
* actions that is required for the whole angular application, I believe its best to separate this from
* the rest of application as a program would be modified to do more operations later*/
(function(){
   angular.module('financeApp',[]);
}());
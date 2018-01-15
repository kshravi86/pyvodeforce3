'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/02_Jupyter Notebooks.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/03_Variables_Assignment.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/04_Types_Conversion.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/06_Built-ins.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/07_Lists.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/08_Loops.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/09_Conditionals.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/05_Strings.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/10_Functions.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/11_Scope.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/12_Dictionaries.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/13_Files.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/14_Libraries.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/15_Errors.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/16_Comprehensions.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/17_Beautiful-Code.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/Gregorian_calendar.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/permutation.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/measurement.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/soldier.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/COOMILK.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/cooking_machine.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/Receipt.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/rotating_number.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/replace.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/BOOKCHEF.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/ADACRA.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/SIMDISH.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/TEAMFORM.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/SIMPSTAT.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/SNAKPROC.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/color_room.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/TWEED.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/unique.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/twoidentical.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/TWONMS.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/cheway.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/Nseries.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);


'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'admobModule','myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/10_Functions.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/15_Errors.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/16_Comprehensions.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/14_Libraries.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/13_Files.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/17_Beautiful-Code.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/07_Lists.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/12_Dictionaries.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/08_Loops.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/05_Strings.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/09_Conditionals.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/06_Built-ins.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/11_Scope.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/04_Types_Conversion.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/03_Variables_Assignment.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/removeduplicatefromlist.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/reversestring.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/setoperators.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/minmaxindex.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/socketmsghandling.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/k_means.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/transpose.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/valueswapping.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/listtocommaseparated.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/conditionalassignment.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/exec.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/tryelse.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/metatable.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/rawinputintegers.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/reverselist.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/stepslice.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/setglobalvariables.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/common_seq_method.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/contextmanagers.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/sortlistkeepindices.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/unique_by_attr.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/dictionaryget.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/lightweightswitch.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/linear_discriminant_analysis.html'});
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
/*
myApp.config(['admobSvcProvider', function (admobSvcProvider) {
  // Optionally you can configure the options here:
  admobSvcProvider.setOptions({
    publisherId:          "ca-app-pub-5830283354936773/1537970274",  // Required
    interstitialAdId:     "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII",  // Optional
  });
}]);


myApp.run(['admobSvc', function (admobSvc) {
  // Also you could configure the options here (or in any controller):
  // admobSvcProvider.setOptions({ ... });

  admobSvc.createBannerView();
  // You could also call admobSvc.createBannerView(options);


  // Handle events:
  $rootScope.$on(admobSvc.events.onAdOpened, function onAdOpened(evt, e) {
	  alert('++');
    console.log('adOpened: type of ad:' + e.adType);
  });
}]);*/

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
        $routeProvider.when('/view1', {templateUrl: 'partials/BaseQueue.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/linklist.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/stack.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/Stacklink.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/BinarySearchTree.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/Tree.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/Graph.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/CircularQueue.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/PriorityQueue.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/Deque.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/Queue.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/Arrays.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/P01_BreadthFirstSearch.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/P02_DepthFirstSearch.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/Heap.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/P01_HeapSort.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/intersection_linked_lists.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/remove_duplicates.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/sum_linked_lists.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/kth_from_end.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/queue_via_stack.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/sort_stack.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/stack_min.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/check_balanced_tree.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/string_compression.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/string_compression.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/check_permutation_strings.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/isSubstring.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/rotate_matrix_by_90.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/urlify.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/check_permutation_of_palindrome.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/oneEditAway.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/python_data_analysis_merge.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/is_unique_characters.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/helloworld.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/hellopyramid.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/scipy_example.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/regex_sample.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/sqlexpressionlanguage.html'});
		$routeProvider.when("/view42",{templateUrl:'partials/sqlorm.html'});
		$routeProvider.when("/view43",{templateUrl:'partials/pyprind_example.html'});
		$routeProvider.when("/view44",{templateUrl:'partials/hashing_sample.html'});
		$routeProvider.when("/view45",{templateUrl:'partials/example_requests.html'});
		$routeProvider.when("/view46",{templateUrl:'partials/seaborn_example.html'});
		$routeProvider.when("/view47",{templateUrl:'partials/serializers.html'});
		$routeProvider.when("/view48",{templateUrl:'partials/xkcd.html'});
		
		$routeProvider.when("/view49",{templateUrl:'partials/sample_Tkinter.html'});
		$routeProvider.when("/view50",{templateUrl:'partials/starcluster_sample.html'});
		$routeProvider.when("/view51",{templateUrl:'partials/docopt_example.html'});
		$routeProvider.when("/view52",{templateUrl:'partials/pandas_timestamp_joins.html'});
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


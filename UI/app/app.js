'use strict';

// Please change the port numbers to your localhost port. Lines 22&25
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'simpleGrid',
  'myApp.services'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);

angular.module('myApp.services', []).
	factory('sharedService', function ($http) {
	    var sharedService = {};
	    return {
	        postData: function (obj) {
	            return $http.post('http://localhost:3928/api/employees/Update', obj);
	        },
	        getData: function () {
	            return $http.get('http://localhost:3928/api/employees/Update');
	        }
	    }
	});




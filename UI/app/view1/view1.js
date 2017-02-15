'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$http', 'sharedService', function ($scope, $http, sharedService) {

    sharedService.getData().then(function (response) {
        $scope.employees = JSON.parse(response.data);
    });

    $scope.myGridConfig = {
        // should return your data (an array)        
        getData: function () { return $scope.employees; },

        options: {
            "showDeleteButton": false,
            "showEditButton": true,
            "editable": true,
            "disabled": false,
            "perRowEditModeEnabled": true,
            "allowMultiSelect": false,
            "pageSize": 5,
            "pageNum": 0,
            "dynamicColumns": true,
            columns: [

							{
							    "field": "FirstName",
							    "required": true,
							    "$title": "FirstName"
							},
							{
							    "field": "LastName",
							    "required": true,
							    "$title": "LastName"
							},
							{
							    "field": "JobTitle",
							    "required": true,
							    "$title": "Job Title"
							}
            ],

            editRequested: function (row) { },
            rowDeleted: function (row) { },
            cellFocused: function (row, column) { },
            rowSelected: function (row) { },
        }
    }


}]);
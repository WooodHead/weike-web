var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
			.when('/', {
				templateUrl : 'angular/partials/words.html',
				controller : 'wordController',
			})
			.otherwise('/')
		}

	]);

app.controller('wordController', function ($scope, wordFactory) {
	$scope.words = [];
	wordFactory.getWords(function (data) {
		$scope.words = data;
    //$scope.words=[{word;'cat'},{word:'dog'}];
	});
});

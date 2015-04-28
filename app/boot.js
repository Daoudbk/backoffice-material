var application = angular.module('BackofficeApp', [
		'ui.router',
	]);

application
	.controller('DashboardCtrl',['$log','$scope','$state',
		function ($log,$scope,$state) {

			$scope.demo = "About me View";

		}])


  	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  		function ($stateProvider, $urlRouterProvider, $httpProvider) {
	        $stateProvider

	        	.state('dashboard', {
					url: '/dashboard',
					controller: 'DashboardCtrl',
					templateUrl: 'app/controllers/dashboard.html.tmpl' 
				});

	}]);

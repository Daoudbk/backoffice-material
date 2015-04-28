application
	.controller('LoginCtrl',['$log','$scope','$state',
		function ($log,$scope,$state) {

			$scope.pathToImages = "bower_components/angular-material/demos/input/demoIcons/icons"

			$scope.user = {
		      	name: 'John Doe',
		      	email: '',
		      	phone: '',
		      	address: 'Mountain View, CA'
	    	};

		}]);
application
	.controller('AboutMainCtrl',['$log','$scope','$state',
		function ($log,$scope,$state) {

			$scope.user = {
				username: '',
				email: '',
				github: '',
				linkedin: '',
				firstColumn: '',
				secondColumn: '',
				thirdColumn: '',
			}

		}
	]);
application
	.controller('PostCreateCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {

			$scope.post = {
				title: '',
				header: '',
				content: '',
			}

			$scope.categories = [
				{
					id: 1,
					name: 'category 1'
				},
				{
					id: 2,
					name: 'category 2'
				},
				{
					id: 3,
					name: 'category 3'
				},
			];
		}
	]);
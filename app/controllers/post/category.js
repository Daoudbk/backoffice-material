application
	.controller('PostCategoryCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {
			
			$scope.categories = [
				{
					id: 1,
					name: 'Category 1',
					totalItems: 48
				},
				{
					id: 2,
					name: 'Category 2',
					totalItems: 124
				},
				{
					id: 3,
					name: 'Category 3',
					totalItems: 34
				},
				{
					id: 4,
					name: 'Category 4',
					totalItems: 21
				},
				{
					id: 5,
					name: 'Category 5',
					totalItems: 9
				},
			];
			
			$scope.addCategory = function (label) {
				var newId = $scope.categories.length + 2;
				$scope.categories.push(
					{
						id: newId,
						name: label,
						totalItems: 0
					}
				);
			}
			
			$scope.removeCategory = function (category) {
				var index = $scope.categories.indexOf(category);
      			$scope.categories.splice(index, 1);
			}
			
		}
	]);
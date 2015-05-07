application
	.controller('PostCategoryCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil','$mdDialog',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil,$mdDialog) {
			
			$scope.confirmRemoveCategory = function(ev,cat) {

				// Appending dialog to document.body to cover sidenav in docs app
				var confirm = $mdDialog.confirm()
					.title('Would you like to remove '+cat.name+'?')
					.content('Remove or change category for all your posts before remove label.')
					.ariaLabel('remove category label')
					.ok('Please do it!')
					.cancel('Not yet!')
					.targetEvent(ev);

				$mdDialog.show(confirm).then(function() {
					if(cat.totalItems == 0) {
						removeCategory(cat);
					}
				}, function() {});
			};

			$scope.confirmUpdateCategory = function(ev,cat) {

				// Appending dialog to document.body to cover sidenav in docs app
				var confirm = $mdDialog.confirm()
					.title('Would you like to update '+cat.name+'?')
					.content('Change will update database definitly.')
					.ariaLabel('update category label')
					.ok('Please update!')
					.cancel('Not wait!')
					.targetEvent(ev);

				$mdDialog.show(confirm).then(function() {
					updateCategory(cat)
				}, function() {});
			};

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
			
			var removeCategory = function (category) {
				var index = $scope.categories.indexOf(category);
      			$scope.categories.splice(index, 1);
			}

			var updateCategory = function (category) {
				// var index = $scope.categories.indexOf(category);
    			// $scope.categories.splice(index, 1, newCategory); // replace
			}
			
		}
	]);
application
	.controller('PostListCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil','$mdDialog',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil,$mdDialog) {

		    $scope.elementsList = [
		    	{
		    		id: 1,
		    		title: 'This is title',
		    		category: 'Spartan',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'entymon',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 2,
		    		title: 'Thisisisisis is title',
		    		category: 'Greek',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'entymon',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 3,
		    		title: 'This is title',
		    		category: 'Athenos',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'admin',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 4,
		    		title: 'This is title',
		    		category: 'Roman',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'admin',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 5,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 6,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 7,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 8,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 9,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 10,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 11,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 12,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    ];

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

		$scope.filters = {
			postTitles: "",
			category: ""
		}

		$scope.showConfirm = function(ev) {
	    	// Appending dialog to document.body to cover sidenav in docs app
			var confirm = $mdDialog.confirm()
				.title('Are you sure to delete this post?')
				.content('Remember if you remove post then all assets belong to this one will be remove also')
				.ariaLabel('Lucky day')
				.ok('Please do it!')
				.cancel('No, wait!')
				.targetEvent(ev);
			$mdDialog.show(confirm).then(function () {
				$log.debug('Element was removed');
			}, function() {
				$log.debug('Keep element alive');
			});
	  	};

		/**	
		 * Pagination
		 */
		$scope.elementsPerPage = 5;

		var begin = 0;
		var end = begin + $scope.elementsPerPage;

		$scope.posts = $scope.elementsList.slice(begin, end);
		$scope.totalElements = $scope.elementsList.length;

		// Always round number to up
		var pages = Math.ceil($scope.totalElements / $scope.elementsPerPage);
		var tabs = [];

		for (iteration = 0; iteration < pages; iteration++) { 
		    tabs.push({title:iteration})
		}

	    $scope.tabs = tabs;
	    $scope.selectedPageIndex = 0;

	    $scope.$watch('selectedPageIndex', function(current, old){
	   		var begin = current * $scope.elementsPerPage;
			var end = begin + $scope.elementsPerPage;
			$scope.posts = $scope.elementsList.slice(begin, end); 
		});

	}]);

// Links:
// http://stackoverflow.com/questions/15535336/combating-angularjs-executing-controller-twice
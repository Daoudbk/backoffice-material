application
	.controller('PostListCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {

			$scope.elementsPerPage = 5;
		    $scope.posts = [
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
		    ];

		$scope.totalElements = $scope.posts.length;

		// Always round number to up
		var pages = Math.ceil($scope.totalElements / $scope.elementsPerPage);

		$log.debug('pages');
		$log.debug(pages);

		var tabs = [
			{ title: 1, content: ["Tabs will become paginated if there isn't enough room for them.","eqweqwe","weqweqw we qe"]},
			{ title: 2, content: ["Tabs will become paginated if there isn't enough room for them.","eqweqwe","weqweqw we qe"]},
			{ title: 3, content: ["You can bind the selected tab via the selected attribute on the md-tabs element."]},
			// { title: 4, content: "If you set the selected tab binding to -1, it will leave no tab selected."},
			// { title: 5, content: "If you remove a tab, it will try to select a new one."},
			// { title: 6, content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
			// { title: 7, content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
			// { title: 8, content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
			// { title: 9, content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
			// { title: 10, content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;

	    $scope.tabs = tabs;
	    $scope.selectedIndex = 2;
	    $scope.$watch('selectedIndex', function(current, old){
	   
		});

	}]);

// Links:
// http://stackoverflow.com/questions/15535336/combating-angularjs-executing-controller-twice
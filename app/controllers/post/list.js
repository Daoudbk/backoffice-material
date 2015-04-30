application
	.controller('PostListCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {

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
		    ];

	}]);
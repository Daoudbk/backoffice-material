application
	.controller('PostCreateCtrl',['$log','$scope','$state','$stateParams','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$stateParams,$timeout,$mdSidenav,$mdUtil) {

			$scope.post = {
				title: '',
				category: '',
				header: '',
				content: '',
				author: '',
				created: '',
			}

			var init = function () {

				if(angular.isDefined($stateParams.id)) {
					angular.forEach($scope.elementsList,function (value, key) {

						if( parseInt(value.id) === parseInt($stateParams.id) ) {
							$scope.post = value;
						}
					})
				}
			}

			$scope.elementsList = [
		    	{
		    		id: 1,
		    		title: 'This is title',
		    		category: 'Spartan',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'entymon',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 2,
		    		title: 'Thisisisisis is title',
		    		category: 'Greek',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'entymon',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 3,
		    		title: 'This is title',
		    		category: 'Athenos',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'admin',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 4,
		    		title: 'This is title',
		    		category: 'Roman',
		    		header: 'short story about',
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
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 7,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 8,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 9,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 10,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 11,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		header: 'short story about',
		    		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    		author: 'user',
		    		created: '12:12:12 13-04-2015',
		    	},
		    	{
		    		id: 12,
		    		title: 'This is title',
		    		category: 'Babilnonian',
		    		header: 'short story about',
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

			init();
		}
	])
	.controller('GalleryCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {

			var galleries = [
				{
					id: 1,
					title: "Example Image 1",
					path: "/path/to/image",
					status: false
				},
				{
					id: 2,
					title: "Example Image 2",
					path: "/path/to/image",
					status: false
				},
				{
					id: 3,
					title: "Example Image 3",
					path: "/path/to/image",
					status: false
				},
				{
					id: 4,
					title: "Example Image 4",
					path: "/path/to/image",
					status: false
				},
				{
					id: 5,
					title: "Example Image 5",
					path: "/path/to/image",
					status: false
				},
				{
					id: 6,
					title: "Example Image 6",
					path: "/path/to/image",
					status: false
				}
			];

			$scope.data = {
			    cb1: true,
			    cb4: true,
			    cb5: false
			};
			$scope.onChange = function(cbState) {
				$scope.message = "The switch is now: " + cbState;
			};

			

		}
	])
	.controller('CommentCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {

			$scope.phones = [
		      { type: 'Home', number: '(555) 251-1234' },
		      { type: 'Cell', number: '(555) 786-9841' },
		    ];
		    $scope.todos = [
		      {
		        face : '/images/60.jpeg',
		        what: 'test@test.com',
		        who: 'Min Li Chan',
		        when: '3:08PM',
		        notes: " I'll be in your neighborhood doing errands",
                answers: [
                    {
                        face : '/images/60.jpeg',
                        what: 'test@test.com',
                        who: 'Min Li Chan',
                        when: '3:08PM',
                        notes: " I'll be in your neighborhood doing errands"
                    },
                    {
                        face : '/images/60.jpeg',
                        what: 'test@test.com',
                        who: 'Min Li Chan',
                        when: '3:08PM',
                        notes: " I'll be in your neighborhood doing errands"
                    },
                    {
                        face : '/images/60.jpeg',
                        what: 'test@test.com',
                        who: 'Min Li Chan',
                        when: '3:08PM',
                        notes: " I'll be in your neighborhood doing errands"
                    },
                    {
                        face : '/images/60.jpeg',
                        what: 'test@test.com',
                        who: 'Min Li Chan',
                        when: '3:08PM',
                        notes: " I'll be in your neighborhood doing errands"
                    },
                ]
		      },
		      {
		        face : '/images/60.jpeg',
		        what: 'test@test.com',
		        who: 'Min Li Chan',
		        when: '3:08PM',
		        notes: " I'll be in your neighborhood doing errands",
                answers: []
		      },
		      {
		        face : '/images/60.jpeg',
		        what: 'test@test.com',
		        who: 'Min Li Chan',
		        when: '3:08PM',
		        notes: " I'll be in your neighborhood doing errands",
                answers: []
		      },
		      {
		        face : '/images/60.jpeg',
		        what: 'test@test.com',
		        who: 'Min Li Chan',
		        when: '3:08PM',
		        notes: " I'll be in your neighborhood doing errands",
                answers: []
		      },
		      {
		        face : '/images/60.jpeg',
		        what: 'test@test.com',
		        who: 'Min Li Chan',
		        when: '3:08PM',
		        notes: " I'll be in your neighborhood doing errands",
                answers: []
		      },
		    ];

			

		}
	]);
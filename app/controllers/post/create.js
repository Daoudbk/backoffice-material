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
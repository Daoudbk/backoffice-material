application
	.controller('ExpMainCtrl',['$log','$scope','$state',
		function ($log,$scope,$state) {

			$scope.experiences = [
				{
					id: 1,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
				{
					id: 2,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
				{
					id: 3,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
				{
					id: 4,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
				{
					id: 5,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
				{
					id: 6,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
				{
					id: 7,
					title: 'test title',
					content: 'Test content',
					path: 'test/path/to/image'
				},
			];

		}
	]);
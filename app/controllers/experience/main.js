application
	.controller('ExpMainCtrl',['$log','$scope','$state',
		function ($log,$scope,$state) {

			$scope.experiences = [
				{
					id: 1,
					title: 'test title',
					content: 'Test content',
					path: '/images/Backbone.png'
				},
				{
					id: 2,
					title: 'test title',
					content: 'Test content',
					path: 'images/Backbone.png'
				},
				{
					id: 3,
					title: 'test title',
					content: 'Test content',
					path: 'images/TWIG.png'
				},
				{
					id: 4,
					title: 'test title',
					content: 'Test content',
					path: 'images/TWIG.png'
				},
				{
					id: 5,
					title: 'test title',
					content: 'Test content',
					path: 'images/TWIG.png'
				},
				{
					id: 6,
					title: 'test title',
					content: 'Test content',
					path: 'images/TWIG.png'
				},
				{
					id: 7,
					title: 'test title',
					content: 'Test content',
					path: 'images/TWIG.png'
				},
			];

		}
	]);
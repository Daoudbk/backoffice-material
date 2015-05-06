application
	.controller('GalleryMainCtrl',['$log','$scope','$state',
		function ($log,$scope,$state) {

			var tabs = [
		        { 
		        	title: 'One', 
		        	galleries: [
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
						}
		          	]
		      	},
		        {
		          	title: 'Two', 
		          	galleries: [
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
						}
		          	]
		      	},
		        {
		          	title: 'Three', 
		          	galleries: [
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
						}
		          	]
		      	},
		        {
		          	title: 'Four', 
		          	galleries: []
		      	},
		        {
		          	title: 'Five', 
		          	galleries: []
		      	},
		        {
		          	title: 'Six', 
		          	galleries: []
		      	},
		        {
		          	title: 'Seven', 
		          	galleries: []
		      	},
		        {
		          	title: 'Eight', 
		          	galleries: [
		          		{
							id: 1,
							title: "Example Image 1",
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
		          	]
		      	},
		        {
		          	title: 'Nine', 
		          	galleries: [
		          		{
							id: 1,
							title: "Example Image 1",
							path: "/path/to/image",
							status: false
						}
		          	]
		      	},
		        {
		          	title: 'Ten', 
		          	galleries: [
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
						}
		          	]
		      	}
	        ];

		    $scope.tabs = tabs;

		    $scope.addTab = function (title) {
		      	tabs.push({ title: title, galleries: [], disabled: false});
		    };
		    $scope.removeTab = function (tab) {
		      	var index = tabs.indexOf(tab);
		      	tabs.splice(index, 1);
		    };

		}
	]);
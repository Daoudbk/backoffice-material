application
	.controller('DashboardCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
		function ($log,$scope,$state,$timeout,$mdSidenav,$mdUtil) {

		    $scope.toggleRight = buildToggler('right');
		    
		    /**
		     * Build handler to open/close a SideNav; when animation finishes
		     * report completion in console
		     */
		    function buildToggler(navID) {
		      	var debounceFn =  $mdUtil.debounce(function(){
	            						$mdSidenav(navID)
	            							.toggle()
		              						.then(function () {
		                						$log.debug("toggle " + navID + " is done");
		              						});
		          					},300);
		      	return debounceFn;
		    };

	}])
  	.controller('DashboardMenuCtrl', 
  		function ($scope, $timeout, $mdSidenav, $log) {
   	 		$scope.menuList = [
					{
						label: 'auth.dashboard.post.list',
						name: 'Post'
					},
					{
						label: 'auth.dashboard',
						name: 'Works'
					},
					{
						label: 'auth.dashboard',
						name: 'Galleries'
					},
					{
						label: 'auth.dashboard.exp',
						name: 'Experiences'
					},
					{
						label: 'auth.dashboard.about',
						name: 'About Me'
					},
				];
  	})
  	.controller('RightSidebarCtrl', 
  		function ($scope, $timeout, $mdSidenav, $log) {
   	 		$scope.close = function () {
      			$mdSidenav('right').close().then(function () {
        	});
    	};
  	});


 
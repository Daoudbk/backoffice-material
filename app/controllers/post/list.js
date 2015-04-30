application
	.controller('PostListCtrl',['$log','$scope','$state','$timeout','$mdSidenav','$mdUtil',
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

	}]);
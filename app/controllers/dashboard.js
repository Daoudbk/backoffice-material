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
						label: 'auth.dashboard.post',
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
						label: 'auth.dashboard',
						name: 'Experiences'
					},
					{
						label: 'auth.dashboard',
						name: 'Comments'
					},
					{
						label: 'auth.dashboard',
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
  	})


      .controller('AppCtrl', function ($scope, $log) {
    var tabs = [
          { title: 1, content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 2, content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 3, content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 4, content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 5, content: "If you remove a tab, it will try to select a new one."},
          { title: 6, content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 7, content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 8, content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 9, content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 10, content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      // previous = selected;
      // selected = tabs[current];
      // if ( old && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      // if ( current )                $log.debug('Hello ' + selected.title + '!');
    });
  });
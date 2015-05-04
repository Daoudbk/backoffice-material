var application = angular.module('Backoffice', [
		'ngResource',
		'ui.router',
		'ngFileUpload',
		'ngAnimate',
		'ngAria',
		'ngMaterial',
		'entymonFilters',
		'entymonDirectives'
	]);

application
  	.config(['$stateProvider', '$urlRouterProvider', '$resourceProvider', '$httpProvider','$mdThemingProvider',
  		function ($stateProvider, $urlRouterProvider, $resourceProvider, $httpProvider,$mdThemingProvider) {
	        $stateProvider

	        	// auth - authorisation resolver
	        	.state('auth', {
			        abstract: true,
			        url: '',
			        template: '<ui-view/>'
			    })

	        	// home
	        	.state('auth.dashboard', {
					url: '/',
					controller: 'DashboardCtrl',
					data: {
						roles: []
					},
					templateUrl: 'app/controllers/dashboard.html.tmpl'
				})

	        	.state('auth.dashboard.post', {
	        		url: 'post/',
	        		date: {
	        			roles: []
	        		},
	        		views: {
	        			'content': { 
	        				templateUrl: 'app/controllers/post/main.html.tmpl',
	        				controller: 'PostMainCtrl', 
	        			}
	        		}
	        	})

	        	.state('auth.dashboard.post.list', {
	        		url: 'list/',
	        		date: {
	        			roles: []
	        		},
	        		views: {
	        			'post': { 
	        				templateUrl: 'app/controllers/post/list.html.tmpl',
	        				controller: 'PostListCtrl', 
	        			}
	        		}
	        	})

	        	.state('auth.dashboard.post.edit', {
	        		url: 'edit/',
	        		date: {
	        			roles: []
	        		},
	        		views: {
	        			'post': { 
	        				templateUrl: 'app/controllers/post/edit.html.tmpl',
	        				controller: 'PostEditCtrl', 
	        			}
	        		}
	        	})

	        	// login 
	        	.state('login', {
					url: '/login',
					controller: 'LoginCtrl',
					data: {
						roles: []
					},
					templateUrl: 'app/controllers/login.html.tmpl'
				})
			;

			$urlRouterProvider.otherwise('/');

			$mdThemingProvider
				.theme('docs-dark', 'default')
		        .primaryPalette('blue');

	}])
	.run(['$rootScope', '$state', '$stateParams','authorization','principal',
    	function($rootScope, $state, $stateParams,authorization,principal) {
      		$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
	        	// track the state the user wants to go to; authorization service needs this
	        	$rootScope.toState = toState;
	        	$rootScope.toStateParams = toStateParams;
		        // if the principal is resolved, do an authorization check immediately. otherwise,
		        // it'll be done when the state it resolved.
		        if (principal.isIdentityResolved()) {
		        	authorization.authorize();
		        }
	      	});
    	}
  	]);
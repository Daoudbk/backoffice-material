application
	.factory('principal', ['$log','$q','$http', '$timeout','$resource','configService','sessionService',
  		function($log,$q, $http, $timeout,$resource,config,sessionService) {
    		var _authenticated = false,
    			_identity,
    			_apiUrl = config.apiUrl,
    			_actions = {};

			var authResource = $resource(_apiUrl+'/user/auth', null, _actions);

    		_identity = undefined;

    		var isIdentityResolved = function() {
	        	return angular.isDefined(_identity);
	      	};

	      	var isAuthenticated = function() {
	        	return _authenticated;
	      	};

	      	var isInRole = function(role) {
	        	if (!_authenticated || !_identity.roles) {
	        		return false;
	        	}
	        	return _identity.roles.indexOf(role) !== -1;
	      	};

	      	var isInAnyRole = function(roles) {
	        	if (!_authenticated || !_identity.roles) {
	        		return false;
	        	}

	        	for (var i = 0; i < roles.length; i++) {
	          		if (this.isInRole(roles[i])) {
	          			return true;
	          		}
        		}

	        	return false;
	      	};

	      	var authenticate = function(identity) {
	        	_identity = identity;
	        	_authenticated = identity != null;

	        	if(identity) {
	        		sessionService.set('token',identity.token);
	        		sessionService.set('identity',angular.toJson(identity));
	        		return true;
	        	} else {
	        		sessionService.destroy('token');
	        		sessionService.destroy('identity');
	        		return false;
	        	}
	      	};

	      	var identity = function(force) {

	        	var defer = $q.defer(),
	        		userToken = sessionService.get('token');
					data = {
	        			token: ''
	        		}

	        	if(userToken === null || angular.isUndefined(userToken)) {
	        		data.token = null;
	        	} else {
	        		data.token = userToken;
	        	}

	        	if (force === true) {
	        		_identity = undefined;
	        	}

	        	// check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately resolving
	        	if (angular.isDefined(_identity)) {
	          		defer.resolve(_identity);
	          		return defer.promise;
	        	}

		        // otherwise, retrieve the identity data from the server, update the identity object, and then resolve.
		        authResource.save(null,data, 
					function (response) {
						_identity = response;
						_authenticated = true;
						defer.resolve(_identity);
					},
					function (error) {

						// $log.debug(error);

						_identity = null;
						_authenticated = false;
						defer.resolve(_identity);
					});

		        // for the sake of the demo, fake the lookup by using a timeout to create a valid
		        // fake identity. in reality,  you'll want something more like the $http request
		        // commented out above. in this example, we fake looking up to find the user is
		        // not logged in
		        var self = this;

        		$timeout(function() {
		          	self.authenticate(null);
		          	defer.resolve(_identity);
        		}, 1000);

        		return defer.promise;
      		};

	      	return {
		      	isIdentityResolved: isIdentityResolved,
	      		isAuthenticated: isAuthenticated,
		      	isInRole: isInRole,
		      	isInAnyRole: isInAnyRole,
		      	authenticate: authenticate,
		      	identity: identity
			};
		}
]);

// SOURCE:
// http://stackoverflow.com/questions/22537311/angular-ui-router-login-authentication
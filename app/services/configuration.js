application.
	service('configService', ['$log',
		function ($log) {

			var configuration = {
				apiUrl: '/publish/rest_api/web/app_dev.php',
				httpApiUrl: 'http://portfolio.entymon/publish/rest_api/web/app_dev.php'
			};

			return configuration;

		}]);
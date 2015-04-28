angular.module('entymonFilters', [])
	.filter('convertDataTime', function ($log) {
		/**	
			Call to filter: {{ inputPhrase | filter:param1:param2 }}
			mapped to function: function (inputPhrase,param1,param2)

			where 
				inputPhrase is value from controller
				filter is defined in quots '' name of filter 
			is possible put a lot of paramteres included functions (I guess)
		*/
		return function (input) {
			input = input || '';
			var date = new Date(input.date);
			return date.toISOString().substring(0, 10);
		};
	});
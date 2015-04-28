angular.module('entymonDirectives',[])
	/**
		'A' - <span ng-sparkline></span> as an Attribute
		'E' - <ng-sparkline></ng-sparkline> as an Element
		'C' - <span class="ng-sparkline"></span> as a Class
		'M' - <!-- directive: ng-sparkline -->
	*/
	.directive('pager', function ($log) {
		return {
			restrict: 'E',
			require: '^ngModel',
			//templateUrl: "app/directives/pager.html.tmpl",
			controller: ['$scope', function ($scope) {
				$scope.getTemp = function(city) {
				};
			}],
			link: function (scope, element, attrs) {
				$log.debug(scope);
				$log.debug(element);
				$log.debug(attrs);
			}
		};
	})
	/**
		Use case #1 - autocompleting from an array of strings - example:
		<autocomplete ng-model="surname" url="/some/url"  />

		Use case #2 - same as #1, but with the option to enter custom entries - example:
		<autocomplete ng-model="surname" url="/some/url" allowCustomEntry="true" />

		Use case #3 - Use an object - bind selected item (whole object) to ng-model - example: 
		<autocomplete ng-model="employee" url="/some/url" label="{{Surname}}, {{Forenames}}" />

		Use case #4 - Use an object - bind a specific property of selected item to ng-model example: 
		<autocomplete ng-model="employee" url="/some/url" label="{{Surname}}, {{Forenames}}" value="Id" />
	*/
	.directive('autocomplete', function ($log,$http, $interpolate, $parse) {
		return {
		    restrict: 'E',
		    replace: true,
		    template: '<input id="postTitle" type="text" class="form-control" />',
		    require: 'ngModel',

		    compile: function (elem, attrs) {
		        var modelAccessor = $parse(attrs.ngModel),
		            labelExpression = attrs.label;

		        return function (scope, element, attrs, controller) {
		            var
		                mappedItems = null,
		                allowCustomEntry = attrs.allowCustomEntry || false,
		                apiUrl = attrs.apiUrl + attrs.url;

		            elem.autocomplete({
		                source: function (request, response) {
		                    $http({
		                        url: apiUrl,
		                        method: 'GET',
		                        params: { 
		                        	title: request.term,
		                        	autocomplite: "autocomplite"
		                        }
		                    })
		                    .success(function (resp) {
		                    	var data = [];
		                    	angular.forEach(resp, function (value,key) {
		                    		data.push(value.title);
		                    	});

		                        mappedItems = $.map(data, function (item) {
		                            var result = {};                                    

		                            if (typeof item === "string") {
		                                result.label = item;
		                                result.value = item;

		                                return result;
		                            }

		                            result.label = $interpolate(labelExpression)(item);

		                            if (attrs.value) {
		                                result.value = item[attrs.value];
		                            }
		                            else {
		                                result.value = item;
		                            }

		                            return result;
		                        });

		                        return response(mappedItems);
		                    });
		                },

		                select: function (event, ui) {
		                    scope.$apply(function (scope) {
		                        modelAccessor.assign(scope, ui.item.value);
		                    });

		                    elem.val(ui.item.label);

		                    event.preventDefault();
		                },

		                change: function (event, ui) {
		                    var
		                        currentValue = elem.val(),
		                        matchingItem = null;

		                    if (allowCustomEntry) {
		                        return;
		                    }

		                    if(mappedItems == null) { return; } 
		                    for (var i = 0; i < mappedItems.length; i++) {
		                        if (mappedItems[i].label === currentValue) {
		                            matchingItem = mappedItems[i].label;
		                            break;
		                        }
		                    }                        

		                    if (!matchingItem) {
		                        scope.$apply(function (scope) {
		                            modelAccessor.assign(scope, null);
		                        });
		                    }
		                }
		            });
		        };
		    }
		};
	});
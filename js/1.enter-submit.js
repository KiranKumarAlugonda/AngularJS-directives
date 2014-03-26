var app = angular.module('MyApp',[]);

app.controller(
    'MyCtrl',
    function ($scope) {

    	$scope.inputValue = '';
    	$scope.inputValue2 = '';
    	$scope.inputValueSubmitted = '';
    	$scope.inputValue2Submitted = '';

    	$scope.enterPressed = function () { 
    		//alert('Enter was pressed! $scope.inputValue is now: ' + $scope.inputValue); 
    		$scope.inputValueSubmitted = $scope.inputValue;
    	}

    	$scope.enterPressed2 = function () { 
    		//alert('Enter was pressed! $scope.inputValue2 is now: ' + $scope.inputValue2); 
    		$scope.inputValue2Submitted = $scope.inputValue2;
    	}

    }
);

/////////////////////////////////////////////////
// shorthand method, returning only a function is the same as declaring a directive's 'link' function
/////////////////////////////////////////////////

app.directive(
    'enterSubmit',
    function () {
        
        return function (scope, el, attrs) {
            
            el.bind('keydown', function (e) {
                if (e.keyCode === 13) {
                    scope.$apply( attrs.enterSubmit );  
                }
            });

        }
    }
);


/////////////////////////////////////////////////
// same directive, but returning an object with a specific 'link' function value
/////////////////////////////////////////////////
app.directive(
    'enterSubmitLink',
    function () {
        
        return {

        	link: function (scope, el, attrs) {
		            el.bind('keydown', function (e) {
		                if (e.keyCode === 13) {
		                    scope.$apply( attrs.enterSubmitLink );  
		                }
		            });
		        }
            
        }
    }
);

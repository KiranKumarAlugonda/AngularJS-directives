var app = angular.module('MyApp',[]);

app.controller(
    'MyCtrl',
    function ($scope) {

    	$scope.textValue = 'Directives Rock!';

    	$scope.allDone = function () { alert('All Done'); }

    }
);


app.directive(
    'editableText',
    function () {
        return {
            
            scope: {
                editableText: '='
            },

            template: 
            	'<div class="row"><div class="span12">' +    

                	'<span ng-show="!editMode" ng-click="toggleEditMode()" tooltipped tip-title="Click to edit">{{editableText}} </span>' + 

                	'<span ng-show="editMode"><input type="text" ng-model="editableText" enter-submit="toggleEditMode()"></span>' + 

                	'<button type="button" ng-click="toggleEditMode()" class="btn">{{ buttonLabel }}</button>' + 

                '</div></div>',

            replace: false,

            controller: function ($scope) {

                $scope.buttonLabel = 'Edit';
                $scope.editMode = false;

                $scope.toggleEditMode = function () {
                    $scope.editMode = !$scope.editMode;
                    if ($scope.editMode) {
                        $scope.buttonLabel = 'Done';
                    } else {
                         $scope.buttonLabel = 'Edit';   
                    }
                };
            }

        }
    }
);


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


app.directive(
	'tooltipped', 
	function () {
		return function (scope, el, attrs) {
			$(el).tooltip({
				title: attrs.tipTitle
			});	
		}
	}
);

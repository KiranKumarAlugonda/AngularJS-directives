var app = angular.module('MyApp',[]);

app.controller(
    'MyCtrl',
    function ($scope) {

    	$scope.keys = [
            { note: 'C' },
            { note: 'D' },
            { note: 'E' },
            { note: 'F' },
            { note: 'G' },
            { note: 'A' },
            { note: 'B' }
        ];

        $scope.lastPressed = '';

        $scope.keyPressed = function (which) {
            $scope.lastPressed = which;
        }

    }
);

app.directive(
    'pianoKey',
    function () {

        return {
            link: function (scope, el, attrs) {

                el.bind('mousedown', function () {
                    scope.$apply(attrs.onPress);
                });

            }

        }

    }
);
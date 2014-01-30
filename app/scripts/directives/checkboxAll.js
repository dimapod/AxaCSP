angular.module('axa.csp').directive('selectAllCheckbox', function () {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            checkboxes: '=',
            allselected: '=allSelected',
            allclear: '=allClear',
            predicate: '@'
        },
        template: '<input type="checkbox" ng-model="master" ng-change="masterChange()">',
        controller: function ($scope, $element) {
            $scope.masterChange = function () {
                if ($scope.master) {
                    angular.forEach($scope.checkboxes, function (cb, index) {
                        cb[$scope.predicate] = true;
                    });
                } else {
                    angular.forEach($scope.checkboxes, function (cb, index) {
                        cb[$scope.predicate] = false;
                    });
                }
            };

            $scope.$watch('checkboxes', function () {
                var allSet = true,
                    allClear = true;
                angular.forEach($scope.checkboxes, function (cb, index) {
                    if (cb[$scope.predicate]) {
                        allClear = false;
                    } else {
                        allSet = false;
                    }
                });

                if ($scope.allselected !== undefined) {
                    $scope.allselected = allSet;
                }
                if ($scope.allclear !== undefined) {
                    $scope.allclear = allClear;
                }

                $element.prop('indeterminate', false);
                if (allSet) {
                    $scope.master = true;
                } else if (allClear) {
                    $scope.master = false;
                } else {
                    $scope.master = false;
                    $element.prop('indeterminate', true);
                }

            }, true);
        }
    };
});



angular.module('axa.csp').controller('computeCtrl', function ($scope, Restangular) {

    $scope.details = "Select one...";
    $scope.select = function (system) {
        $scope.details = system.description;
    };

    $scope.refresh = function() {
        Restangular.all('compute/systems').getList().then(function (data) {
            $scope.systems = data;
        });
    };

    $scope.refresh();

});
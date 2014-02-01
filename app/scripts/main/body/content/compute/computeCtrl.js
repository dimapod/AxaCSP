angular.module('axa.csp').controller('computeCtrl', function ($scope, Restangular) {

    $scope.systems = Restangular.all('compute/systems').getList().$object;

    $scope.details = "Select one...";
    $scope.select = function(system) {
        $scope.details = system.description;;
    }

});
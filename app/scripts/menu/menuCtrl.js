angular.module('axa.csp').controller('menuCtrl',
    function ($rootScope, $scope, httpRequestTracker) {
        $rootScope.hasPendingRequests = function () {
            return httpRequestTracker.hasPendingRequests();
        };
    });
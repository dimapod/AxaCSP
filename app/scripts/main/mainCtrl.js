'use strict';

angular.module('axa.csp').controller('appCtrl', function ($rootScope, $scope, httpRequestTracker, notifications) {
    $rootScope.hasPendingRequests = function () {
        return httpRequestTracker.hasPendingRequests();
    };

    $scope.$on('$routeChangeError', function(event, current, previous, rejection){
        notifications.pushForCurrentRoute('Route change error', 'error');
    });
});
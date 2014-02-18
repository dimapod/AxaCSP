'use strict';

angular.module('axa.csp').controller('appCtrl', function ($rootScope, $scope, httpRequestTracker, notifications, $state) {
    $rootScope.hasPendingRequests = function () {
        return httpRequestTracker.hasPendingRequests();
    };

    $scope.$on('$routeChangeError', function(event, current, previous, rejection){
        notifications.pushForCurrentRoute('Route change error', 'danger');
    });

    $scope.$state = $state;

    // transform state to classes (ie: main.body.compute.layout -> main body compute layout)
    $scope.stateToClass = function() {
        return $state.current.name.replace(/\./g, " ")
    }
});

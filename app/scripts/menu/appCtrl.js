angular.module('axa.csp').controller('appCtrl', function($scope, notifications) {
    $scope.$on('$routeChangeError', function(event, current, previous, rejection){
        notifications.pushForCurrentRoute('Route change error', 'error');
    });
});
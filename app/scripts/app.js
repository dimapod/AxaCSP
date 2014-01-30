'use strict';

angular.module('axa.csp', [
        'ui.router',
        'ngAnimate',
        'restangular',
        'notifications',
        'exceptionHandler',
        'httpRequestTracker'
    ])

    .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function ($stateProvider, $urlRouterProvider, RestangularProvider) {
        RestangularProvider.setBaseUrl('rest/v1.0');

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('dashboard', {
                url: "/",
                templateUrl: "scripts/dashboard/dashboard.tpl.html"
            });
    }])

//    .run(function ($rootScope, $scope, httpRequestTracker) {
//        $rootScope.hasPendingRequests = function () {
//            return httpRequestTracker.hasPendingRequests();
//        };
//    });




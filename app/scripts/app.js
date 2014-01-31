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
            .state('main', {
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'scripts/main/header/header.tpl.html'
                    },
                    'body': {
                        templateUrl: 'scripts/main/body/body.tpl.html'
                    }
                }
            })
            .state('main.body', {
                url: "/",
                views: {
                    'menu': {
                        templateUrl: 'scripts/main/body/menu/menu.tpl.html'
                    },
                    'content': {
                        templateUrl: 'scripts/main/body/content/content.tpl.html'
                    }
                }
            })
            .state('main.body.dashboard', {
                url: "dashboard",
                templateUrl: 'scripts/main/body/content/dashboard/dashboard.tpl.html'
            })
            .state('main.body.compute', {
                url: "compute",
                templateUrl: 'scripts/main/body/content/compute/compute.tpl.html'
            });
    }]);




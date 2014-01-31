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

        $urlRouterProvider.otherwise("/dashboard");
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
                abstract: true,
                views: {
                    'menu': {
                        templateUrl: 'scripts/main/body/menu/menu.tpl.html'
                    },
                    'content': {
                        templateUrl: 'scripts/main/body/content/content.tpl.html'
                    }
                }
            })
            .state('main.body.standard', {
                abstract: true,
                templateUrl: 'scripts/main/body/content/standard-layout.tpl.html'
            })
            .state('main.body.standard.dashboard', {
                url: "dashboard",
                views: {
                    'area-main': {
                        templateUrl: 'scripts/main/body/content/dashboard/dashboard-main.tpl.html'
                    },
                    'area-details': {
                        templateUrl: 'scripts/main/body/content/dashboard/dashboard-details.tpl.html'
                    },
                    'area-right1': {
                        templateUrl: 'scripts/main/body/content/dashboard/dashboard-right1.tpl.html'
                    },
                    'area-right2': {
                        templateUrl: 'scripts/main/body/content/dashboard/dashboard-right2.tpl.html'
                    }
                }
            })
            .state('main.body.standard.compute', {
                url: "compute",
                views: {
                    'area-main': {
                        templateUrl: 'scripts/main/body/content/compute/compute.tpl.html'
                    }
                }
            });
    }]);




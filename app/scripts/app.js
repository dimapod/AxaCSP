'use strict';

angular.module('axa.csp', [
        'ui.router',
        'ngAnimate',
        'restangular',
        'highcharts-ng',
        'notifications',
        'exceptionHandler',
        'httpRequestTracker'
    ])

    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider, $httpProvider) {
        RestangularProvider.setBaseUrl('rest/v1.0');

        $httpProvider.interceptors.push('authInterceptor');

        $urlRouterProvider.otherwise("/phoenix/dashboard");
        $stateProvider
            .state('auth', {
                url: "/auth",
                views: {
                    'body': {
                        templateUrl: 'scripts/authenticate/auth.tpl.html',
                        controller: 'authCtrl'
                    }
                }
            })
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
                url: "/:projectId/",
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
            .state('main.body.dashboard', {
                abstract: true,
                templateUrl: 'scripts/main/body/content/standard-layout.tpl.html',
                controller: 'dashboardCtrl'
            })
            .state('main.body.dashboard.layout', {
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
            .state('main.body.compute', {
                abstract: true,
                templateUrl: 'scripts/main/body/content/standard-layout.tpl.html',
                controller: 'computeCtrl'
            })
            .state('main.body.compute.layout', {
                url: "compute",
                views: {
                    'area-main': {
                        templateUrl: 'scripts/main/body/content/compute/compute-main.tpl.html'
                    },
                    'area-details': {
                        templateUrl: 'scripts/main/body/content/compute/compute-details.tpl.html'
                    }
                }
            })
            .state('main.body.storage', {
                abstract: true,
                templateUrl: 'scripts/main/body/content/standard-layout.tpl.html',
                controller: 'storageCtrl'
            })
            .state('main.body.storage.layout', {
                url: "storage",
                views: {
                    'area-main': {
                        templateUrl: 'scripts/main/body/content/storage/storage-main.tpl.html'
                    },
                    'area-right1': {
                        templateUrl: 'scripts/main/body/content/storage/storage-right1.tpl.html'
                    },
                    'area-right2': {
                        templateUrl: 'scripts/main/body/content/storage/storage-right2.tpl.html'
                    }
                }
            })
            .state('main.body.network', {
                abstract: true,
                templateUrl: 'scripts/main/body/content/network/network-layout.tpl.html',
                controller: 'networkCtrl'
            })
            .state('main.body.network.layout', {
                url: "network",
                views: {
                    'area-main': {
                        templateUrl: 'scripts/main/body/content/network/network-main.tpl.html'
                    },
                    'area-details': {
                        templateUrl: 'scripts/main/body/content/network/network-details.tpl.html'
                    }
                }
            });
    });




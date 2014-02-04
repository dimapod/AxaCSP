angular.module('axa.csp').factory('authInterceptor', function ($rootScope, $q, $window, $location) {
    var isRestUrl = function (path) {
        return path.indexOf('rest') === 0;
    };

    return {
        'request': function (config) {
            if (isRestUrl(config.url)) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
            }
            return config;
        },

        'responseError': function(rejection) {
            if (isRestUrl(rejection.config.url)) {
                if (rejection.status === 401) {
                    $location.path('/auth')
                }
            }
            return $q.reject(rejection);
        }

    };


});
angular.module('exceptionHandler', ['notifications']);

angular.module('exceptionHandler').factory('exceptionHandlerFactory', ['$injector', function ($injector) {
    return function ($delegate) {

        return function (exception, cause) {
            var notifications = $injector.get('notifications');

            // Pass through to original handler
            $delegate(exception, cause);

            // Push a notification error
            notifications.pushForCurrentRoute(exception.message, 'danger', {}, {
                exception: exception,
                cause: cause
            });
        };
    };
}]);

angular.module('exceptionHandler').config(['$provide', function ($provide) {
    $provide.decorator('$exceptionHandler', ['$delegate', 'exceptionHandlerFactory', function ($delegate, exceptionHandlerFactory) {
        return exceptionHandlerFactory($delegate);
    }]);
}]);

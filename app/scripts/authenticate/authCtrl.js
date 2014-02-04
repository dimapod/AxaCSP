
angular.module('axa.csp').controller('authCtrl', function ($scope, $http, $window, $location) {
    console.log("authCtrl");

    $scope.user = {username: 'axa.csp', password: 'axa'};
    $scope.message = '';
    $scope.submit = function () {
        $http.post('/authenticate', $scope.user)
            .success(function (data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $location.path('/')
            })
            .error(function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;

                $scope.message = 'Invalid user or password';
            });
    };
});
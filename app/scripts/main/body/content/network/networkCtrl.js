angular.module('axa.csp').controller('networkCtrl', function ($scope, projectService, Restangular) {

    $scope.project = projectService.data;

    $scope.chartNetworkConfig = {
        options: {
            chart: {
                type: 'area'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        },
        series: [
            { data: [1, 7, -2, -12, 8, 1, 7, 7] }
        ],
        title: {
            text: 'Network health for ' + $scope.project.name
        },
        loading: false
    };

    $scope.addPoint = function() {
        $scope.chartNetworkConfig.series[0].data.push(getRandomInt(-16, 16));
    };
    $scope.removePoint = function() {
        $scope.chartNetworkConfig.series[0].data.splice(0, 1);
    };


    $scope.refresh = function() {
        Restangular.all('network/data').getList().then(function (data) {
            console.log("data", data[0].data);
            $scope.chartNetworkConfig.series = data;
        });
    };

    $scope.refresh();


    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});
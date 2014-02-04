angular.module('axa.csp').controller('dashboardCtrl', function ($scope, projectService) {

    $scope.project = projectService.data;

    $scope.chartDashboard1Config = {
        options: {
            chart: {
                type: 'line'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        },
        series: [
            { data: [7, 12, 9, 2, 11] },
            { data: [1, 7, 2, 12, 8] }
        ],
        title: {
            text: ''
        },
        loading: false
    };

    $scope.chartDashboard2Config = {
        options: {
            chart: {
                type: 'column'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        },
        series: [
            {
                data: [10, 15, 12, 8, 7]
            }
        ],
        title: {
            text: ''
        },

        loading: false
    };

});
angular.module('axa.csp').controller('storageCtrl', function ($scope, projectService) {

    $scope.project = projectService.data;

    $scope.chartStorage1Config = {
        options: {
            chart: {
                type: 'pie'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        },
        series: [
            { data: [
                ['Free', 45.0],
                ['Wired', 26.8],
                {
                    name: 'Active',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Inactive', 8.5]
            ]
            }
        ],
        title: {
            text: ''
        },
        loading: false
    };


});
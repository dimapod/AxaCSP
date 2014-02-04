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
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',   0.7]
        ],
        title: {
            text: ''
        },
        loading: false
    };




});
angular.module('axa.csp').controller('storageCtrl', function ($scope, projectService, $modal) {

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

    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'scripts/main/body/content/storage/modalContent.tpl.html',
            controller: 'modalInstanceCtrl',
            backdrop: 'static',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log("selectedItem", selectedItem);
            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

});
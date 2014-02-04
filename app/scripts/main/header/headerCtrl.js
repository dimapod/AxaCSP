'use strict';

angular.module('axa.csp').controller('headerCtrl', function ($scope, $stateParams) {

    $scope.params = $stateParams;
    $scope.tabs = {
        phoenix: {id: "phoenix", label: "Phoenix", icon: "phoenix", state: "main.body.dashboard.layout({projectId: 'phoenix'})"},
        project2: {id: "project2", label: "Project2", icon: "project2", state: "main.body.dashboard.layout({projectId: 'project2'})"},
        project3: {id: "project3", label: "Project3", icon: "project3", state: "main.body.dashboard.layout({projectId: 'project3'})"}
    };

    // Add 'active:true' to active tab object
    $scope.$watch('params.projectId', function(projectId) {
        console.log(projectId);
        angular.forEach($scope.tabs, function(tab) {
            tab.active = false;
        });
        $scope.tabs[projectId].active = true;
    }, true);


});

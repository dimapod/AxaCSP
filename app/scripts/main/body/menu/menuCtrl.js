angular.module('axa.csp').controller('menuCtrl', function ($scope) {

    $scope.menu = [
        {label: "Dashboard", icon: "dashboard", state: ".dashboard.layout"},
        {label: "Compute", icon: "compute", state: ".compute.layout"},
        {label: "Storage", icon: "storage", state: ".storage.layout"},
        {label: "Network", icon: "network", state: ".network.layout"},
        {label: "Security", icon: "security", state: "security"},
        {label: "Users", icon: "users", state: "users"},
        {label: "Services", icon: "services", state: "services"},
        {label: "Stacks", icon: "stacks", state: "stacks"},
        {label: "Tools", icon: "tools", state: "tools"}
    ];

});
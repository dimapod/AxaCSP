angular.module('axa.csp').controller('menuCtrl', function ($scope) {

    $scope.menu = [
        {label: "Dashboard", icon: "dashboard", state: ".standard.dashboard"},
        {label: "Compute", icon: "compute", state: ".standard.compute"},
        {label: "Storage", icon: "storage", state: "storage"},
        {label: "Network", icon: "network", state: "network"},
        {label: "Security", icon: "security", state: "security"},
        {label: "Users", icon: "users", state: "users"},
        {label: "Services", icon: "services", state: "services"},
        {label: "Stacks", icon: "stacks", state: "stacks"},
        {label: "Tools", icon: "tools", state: "tools"}
    ]

});
angular.module('axa.csp').controller('computeCtrl', function ($scope, Restangular) {

    $scope.systems = Restangular.all('compute/systems').getList().$object;

//    $scope.systems = [
//        {name: "OpenStack", img: "openstack", url: "http://openstack.com"},
//        {name: "Windows Azure", img: "azure", url: "http://microsoft.com/asure"},
//        {name: "Microsoft System Center", img: "system_center", url: "http://microsoft.com/systemcenter"}
//    ];

});
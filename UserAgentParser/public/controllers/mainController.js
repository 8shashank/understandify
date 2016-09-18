app.controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.navlinks = [
        {name: "User String Parser", link: "/uaParser"}
    ];
}]);
app.controller('userAgentController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getUserAgent = function() {
		$http.post('/parseAgent', {"userAgent": $scope.uaString} ).then(function(res){
			$scope.parsedAgent = res.data;
		});
	}
}]);
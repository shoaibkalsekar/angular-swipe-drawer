var module = angular.module( 'app', ['ngTouch'] );

module.controller( 'DrawerController', [ '$scope', function( $scope ) {

	$scope.drawerOpen = function() {
		console.log('swiped');
		return $scope.drawer = true;
	};

	$scope.drawerClose = function() {
		console.log('swiped');
		return $scope.drawer = false;
	};

	$scope.drawerToggle = function() {
		console.log('toggled');
		return $scope.drawer = $scope.drawer !== true;
	};

}]);
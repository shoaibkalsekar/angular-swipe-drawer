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



	// should be moved to a directive
	angular.element( document ).ready( function() {
		$scope.innerWindowHeightInitial = window.innerHeight;
		$scope.addressBar = true;
	});


	angular.element( window ).bind( 'touchmove', function() {

		$scope.innerWindowHeight = window.innerHeight;

//		console.log($scope.innerWindowHeightInitial +" "+ $scope.innerWindowHeight);

		if( $scope.innerWindowHeight > $scope.innerWindowHeightInitial ) {
			// retracted
			$scope.$apply( function () {
				$scope.addressBar = false;
			});
		}
		else {
			//visible
			$scope.$apply( function () {
				$scope.addressBar = true;
			});
		}

	});



	$scope.$watch('drawer', function( drawer ){
		if( drawer ){

			if( $scope.addressBar ) {
				angular.element( document.getElementById( 'overflowWrapper' ) ).css( 'height', ( window.innerHeight + 50 ) + "px" );
			}
			else {
				angular.element( document.getElementById( 'overflowWrapper' ) ).css( 'height', ( window.innerHeight + 1 ) + "px" );
			}

		}
		else{
			angular.element( document.getElementById( 'overflowWrapper' ) ).css( 'height', 'auto');
		}
	});

	// ! should be moved to a directive




}]);
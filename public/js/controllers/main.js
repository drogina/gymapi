

angular.module('gymternetApp.controllers', [])
	.controller('gymnastController', function($scope, Gymnasts, Meets) {
		$scope.formData = {};
		$scope.loading = true;

		Gymnasts.query(function(data) {
				$scope.gymnasts = data;
				$scope.loading = false;
			});

		$scope.addGymnast = function() {
			$scope.loading = true;

			if ($scope.formData.first_name != undefined && 
					$scope.formData.last_name != undefined && 
					$scope.formData.country != undefined) {
				Gymnasts.create($scope.formData, function(response) {
					$scope.loading = false;
					$scope.formData = {};
					$scope.gymnasts = response;
				});
			} else {
				$scope.loading = false;
			}
		};

		// $scope.getMedalsByMeet = function(gymnast, meet) {

		// }
	});
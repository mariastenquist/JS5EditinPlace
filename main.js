angular.module('app', []);

angular.module('myApp')
	.controller('mainController', ['$scope', function($scope){

		$scope.texta = "Enter your name";
		$scope.hideText = true


		$scope.textb = "Enter your email";
		$scope.hideText2 = true

		$scope.showInput = function(text){
			if(text === 1 ){
				$scope.hideText = !$scope.hideText;
			}
			else if (text === 2) {
				$scope.hideText2 = !$scope.hideText2;

			}
		}

	}])
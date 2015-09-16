angular.module('app', []);

angular.module('app')
	.controller('mainController', ['$scope', function($scope){

		$scope.texta = "Enter your name";
		$scope.hideText1 = true


		$scope.textb = "Enter your email";
		$scope.hideText2 = true

		$scope.textc = "Enter your birthday";
		$scope.hideText3 = true


		$scope.showInput = function(text){
			if(text === 1 ){
				$scope.hideText1 = !$scope.hideText1;
			}
			else if (text === 2) {
				$scope.hideText2 = !$scope.hideText2;

			} 
			else if (text === 3) {
				$scope.hideText3 = !$scope.hideText3;
			}
		}

	}])
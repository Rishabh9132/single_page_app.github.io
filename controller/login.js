
myapp.controller('login',function($scope,$http){

	$scope.dealAdd = false;
	console.log("in login function");
	$scope.deal = {};


	var url = "./assets/data/data.json";
	$http.get(url).then(function(response){

		console.log(response.data);
		$scope.data = response.data;
	},function(response){
		console.log(response,"error occured");
	});

	$scope.add = function(){
		console.log($scope.deal);
		console.log("in deal");
		$scope.data.push($scope.deal);
		$scope.deal = {};
	}

	$scope.delete = function(ind){
		$scope.data.splice(ind,1);
	}





	});

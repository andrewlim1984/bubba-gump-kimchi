angular.module('bgk', [])

.controller('mainController', function($scope, $http) {
	$scope.formData = {};
	$http.get('/api/todos')
	.success(function(data) {
		$scope.todos = data;
		console.log(data);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.username, $scope.post)
		.success(function(data) {
			$scope.username = {};
			$scope.post = {};
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

});

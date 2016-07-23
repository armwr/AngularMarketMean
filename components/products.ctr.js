(function() {

	"use strict"
	
	angular
	.module('ngProducts')
	.controller('productsCtrl', function($scope, $http, productsFactory, $mdSidenav, $mdToast, $mdDialog){

		productsFactory.getProducts().then(function(products){
			$scope.products = products.data;
			$scope.categories = getCategories($scope.products);
		})


		var contact = {
			name: "Lysenko Volodymyr",
			number: "(555) 555-5555",
			email: 'armwr91@gmail.com'
		}

		$scope.openSidebar = function() {
			$mdSidenav('left').open();
		}

		$scope.closeSidebar = function() {
			$mdSidenav('left').close();
		}

		$scope.saveProduct = function(product) {
			if(product) {
				$scope.product.contact = contact;
				$scope.products.push(product);
				$scope.product = {};
				$scope.closeSidebar();
				showToast('Product saved!')
			}
		}

		$scope.editProduct = function(product) {
			$scope.editing = true;
			$scope.openSidebar();
			$scope.product = product;
		}

		$scope.saveEdit = function() {
			$scope.editing = false;
			$scope.product = {};
			$scope.closeSidebard();
			showToast('Edit saved');
		}

		$scope.deleteProduct = function(event, product) {
			var confirm = $mdDialog.confirm()
			.title('Are you sure you want to delete ' + product.title + ' ?')
			.ok('Yes')
			.cancel('No')
			.targetEvent(event);
			$mdDialog.show(confirm).then(function() {
				var index = $scope.products.indexOf(product);
				$scope.products.splice(index, 1)
			},function() {})
		}

		function showToast(message) {
			$mdToast.show (
				$mdToast.simple()
				.content(message)
				.position('top, right')
				.hideDelay(3000)
				);
		}

		function getCategories(products) {

			var categories = [];

			angular.forEach(products, function(item){
				angular.forEach(item.categories, function(category){
					categories.push(category);
				})
			})

			return _.uniq(categories);
		}
	})
})()
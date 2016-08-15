(function() {

	"use strict"
	
	angular
	.module('ngProducts')
	.controller('productsCtrl', function($scope, $http, $mdSidenav, $mdToast, $mdDialog) {

		var vm = this;

		// vm.getProducts = getProducts;
		vm.openSidebar = openSidebar;
		vm.closeSidebar = closeSidebar;
		// vm.saveProduct = saveProduct;
		vm.editProduct = editProduct;
		vm.saveEdit = saveEdit;
		// vm.deleteProduct = deleteProduct;

		vm.products;
		// vm.product;
		vm.categories;
		vm.editing;


		getProducts().then(function(products){
			vm.products = products.data;
			vm.categories = getCategories(vm.products);
		})


		var contact = {
			name: "Lysenko Volodymyr",
			number: "(555) 555-5555",
			email: 'armwr91@gmail.com'
		}

		function openSidebar() {
			$mdSidenav('left').open();
		}

		function closeSidebar() {
			$mdSidenav('left').close();
		}

		function getProducts() {
			return $http.get('/mock');
		}

		$scope.saveProduct = function(product) {
			console.log($scope.product);
			if($scope.product) {
				$scope.product.contact = contact;
				// vm.products.push(product);
				vm.product = {};
				$http.post('/mock', $scope.product).success(function(response){
					console.log(response);
				})
				closeSidebar();
				showToast('Product saved!')
			}
		}
		function editProduct(product) {
			vm.editing = true;
			openSidebar();
			$scope.product = product;
		}

		function saveEdit() {
			vm.editing = false;
			$scope.product = {};
			closeSidebar();
			showToast('Edit saved');
		}

		$scope.deleteProduct = function (id) { //event
			console.log(id);
			var confirm = $mdDialog.confirm()
			.title('Are you sure you want to delete ?') //vm.product.title
			.ok('Yes')
			.cancel('No')
			.targetEvent(event);
			$mdDialog.show(confirm).then(function() {
				// var index = vm.products.indexOf(product);
				// vm.products.splice(index, 1)
				$http.delete('/mock/' + id).success(function(response){
					getProducts()
				})
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
angular
	.module('ngProducts', ['ngMaterial'])
	.config(function ($mdThemingProvider) {

		$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('orange');

	})
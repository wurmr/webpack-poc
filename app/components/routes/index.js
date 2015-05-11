'use strict';

module.exports = ['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
		enabled: false
	});
	
	$stateProvider.state('home', {
		url: '/',
		controller: require('../../features/home/home.controller'),
		controllerAs: 'vm',
		template: '<div>Hello {{vm.name}}</div>'
	});
	
	$urlRouterProvider.otherwise('/');
}];
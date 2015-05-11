'use strict';

var routes = ['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
		enabled: false
	});

	$stateProvider.state('home', {
		url: '/',
		controller: 'HomeController',
		controllerAs: 'vm',
		template: require('../../features/home/home.tpl.html')
	});
	
	$urlRouterProvider.otherwise('/');
}];

module.exports = routes;
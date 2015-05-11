'use strict';

var angular = require('angular');

var requires = [
	require('angular-ui-router'),
	require('./features/home').name
]

var app = angular.module('app', requires);

var routes = require('./components/routes');

app.config(routes);

module.exports = app;
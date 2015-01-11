var TsohaApp = angular.module('TsohaApp', ['ngRoute', 'hljs']);

TsohaApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

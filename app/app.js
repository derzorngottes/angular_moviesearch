(function() {
  'use strict';

  angular
    .module('movieApp', ['ngRoute'])
    .config(config);

  config.$inject = ['$locationProvider'];

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  }
})();

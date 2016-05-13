var app = angular.module('movieApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'landing/landing.html'
    })
    .when('/movie', {
      controller: 'movieCtrl',
      templateUrl: 'movies/movie_detail.html'
    })
    .otherwise({
      redirectTo: 'landing/landing.html'
    });
}]);

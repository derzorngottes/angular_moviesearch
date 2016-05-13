(function() {
  angular
    .module('movieApp');
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'landing/landing.html',
        controllerAs: 'homeCtrl',
        controller: 'homeCtrl'
      })
      .when('/movie', {
        templateUrl: 'movies/movie_detail.html',
        controllerAs: 'movieCtrl',
        controller: 'movieCtrl'
      })
      .otherwise({
        redirectTo: 'landing/landing.html'
      });
  }
});

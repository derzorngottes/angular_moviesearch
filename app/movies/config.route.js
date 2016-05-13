(function() {
  angular
    .module('movieApp')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'landing/landing.html',
        controllerAs: 'movies',
        controller: 'Movies'
      })
      .when('/movie', {
        templateUrl: 'movies/movie_detail.html',
        controllerAs: 'movies',
        controller: 'Movies'
      })
      .otherwise({
        redirectTo: 'landing/landing.html'
      });
  }
});

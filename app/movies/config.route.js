(function() {
  angular
    .module('movieApp')
    .config(config);

  config.$inject = ['$routeProvider']

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/landing/landing.html',
        controllerAs: 'movies',
        controller: 'Movies'
      })
      .when('/movies', {
        templateUrl: 'movies/movies.html',
        controllerAs: 'movies',
        controller: 'Movies'
      })
      .when('/movie', {
        templateUrl: '/movies/movie_detail.html',
        controllerAs: 'movies',
        controller: 'Movies'
      })
      .otherwise({
        templateUrl: '/landing/landing.html',
        controllerAs: 'movies',
        controller: 'Movies'
      });
  }
})();

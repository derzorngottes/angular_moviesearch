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
      .when('/movie/:name/view', {
        templateUrl: 'app/movies/movie.html',
        controllerAs: 'movie',
        controller: 'Movie'
      })
      .otherwise({
        templateUrl: 'app/landing/landing.html',
        controllerAs: 'movies',
        controller: 'Movies'
      });
  }
})();

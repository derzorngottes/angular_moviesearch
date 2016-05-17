(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('Movie', Movie);

  Movie.$inject = ['$location', '$routeParams', 'MovieService'];

  function Movie($location, $routeParams, MovieService) {
    var vm = this;

    MovieService.getMovie($route.current.params.id).then(function(movie) {
      vm.movie = movie.data;
    })
    .catch(err).then(function(err) {
      console.log(err);
      vm.error = err;
    });
  }
})();

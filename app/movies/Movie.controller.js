(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('Movie', Movie);

  Movie.$inject = ['$location', '$routeParams', 'MovieService'];

  function Movie($location, $routeParams, MovieService) {
    var vm = this;

    MovieService.getMovie($routeParams.id).then(function(movie) {
      vm.movie = movie.data;
    })
    .catch(err).then(function(err) {
      vm.error = err;
    });
  }
})();

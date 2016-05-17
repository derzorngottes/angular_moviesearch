(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('Movie', Movie);

  Movie.$inject = ['$location', '$routeParams', 'MovieService'];

  function Movie($location, $routeParams, MovieService) {
    var vm = this;

    // MovieService.getMovie($routeParams.title).then(function(movie) {
    //   vm.movie = movie.data;
    // });

    vm.getMovie = function(selectTitle) {
      MovieService.getMovie(selectTitle).then(function(movie) {
        vm.movie = movie.data;
      }).catch(function(err) {
        vm.errors = err;
      });
    }
  }
})();

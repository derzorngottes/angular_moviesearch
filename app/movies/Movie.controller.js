(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('Movie', Movie);

  Movie.$inject = ['MovieService'];

  function Movie(MovieService) {
    var vm = this;

    vm.getMovie = function(selectTitle) {
      MovieService.getMovie(selectTitle).then(function(movie) {
        vm.movie = movie.data;
      }).catch(function(err) {
        vm.errors = err;
      });
    }
  }
})();

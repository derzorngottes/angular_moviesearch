(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('Movies', Movies);

  Movies.$inject = ['MovieService'];

  function Movies(MovieService) {
    var vm = this;

    vm.getMovies = function(title) {
      MovieService.getMovies(title).then(function(movies) {
        vm.movies = movies.data;
      }).catch(function(err) {
        vm.errors = err;
      });
    }
  }
})();

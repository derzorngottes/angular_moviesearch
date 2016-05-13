(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('Movies', Movies);

  Movies.$inject = ['MovieService'];

  function Movies(MovieService) {
    var vm = this;

    MovieService.getMovies().then(function(movies) {
      vm.movies = movies.data;
    }).catch(function(err) {
      vm.errors = err;
    });
  }
});

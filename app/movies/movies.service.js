(function() {
  'use strict';

  angular
    .module('movieApp')
    .service('MovieService', MovieService);

  MovieService.$inject = ['$http'];

  function MovieService($http) {
    return {
      getMovies: function(title) {
        return $http.get('http://www.omdbapi.com/?s=' + title)
      },
      getMovie: function(id) {
        return $http.get('http://www.omdbapi.com/?i=' + id)
      }
    };
  }
})();

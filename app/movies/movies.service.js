(function() {
  'user strict';

  angular
    .module('movieApp')
    .service('MovieService', MovieService);

  MovieService.$inject = ['$http'];

  function MovieService($http) {
    return {
      getMovies: function(title) {
        return $http.get('http://www.omdbapi.com/?s=' + title)
      },
      getMovie: function(selectTitle) {
        return $http.get('http://www.omdbapi.com/?t=' + selectTitle)
      }
    };
  }
})();

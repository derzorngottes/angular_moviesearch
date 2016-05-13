(function() {
  'user strict';

  angular
    .module('movieApp')
    .service('MovieService', MovieService);

  MovieService.$inject = ['$http'];

  function MovieService($http) {
    return {
      getMovies: function() {
        return $http.get('http://www.omdbapi.com/?t=' + title)
      }
    };
  }
})();

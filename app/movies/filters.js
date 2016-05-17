angular.module('movieFilters', []).filter('trustUrl', function() {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});

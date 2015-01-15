TsohaApp.controller('PageController', ['$rootScope', '$scope', '$anchorScroll', '$location', 'active', function($rootScope, $scope, $anchorScroll, $location, active){
  $location.hash('top');

  $rootScope.active = active;

  $scope.goto_anchor = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();

    $location.hash(old);
  };
}]);

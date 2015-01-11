TsohaApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/johdanto', {
        templateUrl: 'materials/introduction.html'
      }).
      when('/viikko1', {
        templateUrl: 'materials/week1.html'
      }).
      when('/viikko2', {
        templateUrl: 'materials/week2.html'
      }).
      when('/viikko3', {
        templateUrl: 'materials/week3.html'
      }).
      when('/viikko4', {
        templateUrl: 'materials/week4.html'
      }).
      when('/viikko5', {
        templateUrl: 'materials/week5.html'
      }).
      when('/lopullinen-palautus', {
        templateUrl: 'materials/end.html'
      }).
      otherwise({
        redirectTo: '/johdanto'
      })
  }]);

TsohaApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/johdanto', {
        templateUrl: 'materials/introduction.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'introduction' } }
      }).
      when('/viikko1', {
        templateUrl: 'materials/week1.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'week1' } }
      }).
      when('/viikko2', {
        templateUrl: 'materials/week2.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'week2' } }
      }).
      when('/viikko3', {
        templateUrl: 'materials/week3.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'week3' } }
      }).
      when('/viikko4', {
        templateUrl: 'materials/week4.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'week4' } }
      }).
      when('/viikko5', {
        templateUrl: 'materials/week5.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'week5' } }
      }).
      when('/lopullinen-palautus', {
        templateUrl: 'materials/end.html',
        controller: 'PageController',
        resolve: { active: function(){ return 'end' } }
      }).
      otherwise({
        redirectTo: '/johdanto'
      })
  }]);

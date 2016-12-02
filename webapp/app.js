var MEANStack=angular.module('MEANStack',['ngRoute']);

MEANStack.config(function($routeProvider){
   $routeProvider
    .when('/home', {
        templateUrl: 'templates/home.html',
		controller: 'HomeController',
        controllerAs: 'home'
    })
	.when('/about', {
        templateUrl: 'templates/about.html',
		controller: 'AboutController',
        controllerAs: 'about'
    })
	.otherwise({
        redirectTo: '/home'
    });
});

MEANStack.run(function(){
   console.log("App initialised");
});


MEANStack.controller('HomeController',function(){
    var vm=this;
	vm.model={
	    pageName:"Hello world."
	}
});

MEANStack.controller('AboutController',function(){
    var vm=this;
	vm.model={
	    pageName:"About US."
	}
});





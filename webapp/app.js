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
	.when('/todo', {
        templateUrl: 'templates/todo.html',
		controller: 'TodoCtrl',
        controllerAs: 'TodoCtrl'
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

MEANStack.controller('TodoCtrl',function(){
    var vm=this;
	vm.model={
	   searchStr:"",
	   taskList:[
	      {taskName:"Buy groceries", completed:false  },
	      {taskName:"Pay electricity bills" , completed:false  },
	      {taskName:"Pay broadband bill" , completed:false  },
	      {taskName:"Pay credit card bill" , completed:false  }
	   ],
	   taskName:""
	}
	
	vm.completeTheTask=function(taskDetl){
		taskDetl.completed=true;
	}
	
	vm.createTask=function(){
	    vm.model.taskList.push({taskName:vm.model.taskName,completed:false})
		vm.model.taskName="";
	}
	
});

MEANStack.controller('MenuCtrl',function(){
    var vm=this;
	vm.model={
	   menuList:[
	       {value:'home',label:"Home"},
	       {value:'about',label:"About"},
	       {value:'todo',label:"To Do"}
	   ],
	   selectedMenu:"home"
	}
	
	vm.selectItem=function(menuItem){
		vm.model.selectedMenu=menuItem.value;
	}
	
});





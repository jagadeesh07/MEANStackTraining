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
	.when('/components', {
        templateUrl: 'templates/component.html',
		controller: 'components',
        controllerAs: 'components'
    })
	.otherwise({
        redirectTo: '/home'
    });
});

MEANStack.run(function(){
   console.log("App initialised");
});


MEANStack.controller('HomeController',function(userprofile){
    console.log("Initially user Name is : " + userprofile.getName("Jagadeesh"));
    console.log("Initially user Name is : " + userprofile.name + " direct usage");
	userprofile.setName("Jagadeesh");
	console.log("Now user Name is : " + userprofile.getName("Jagadeesh"));
	var vm=this;
	vm.model={
	    pageName:"Hello world."
	}
});

MEANStack.controller('AboutController',function(userprofile){
	console.log("Initially user Name is : " + userprofile.getName("Jagadeesh"));
	userprofile.setName("Jagadeesh1");
	console.log("Now user Name is : " + userprofile.getName("Jagadeesh"));
	
    var vm=this;
	vm.model={
	    pageName:"About US."
	}
});

MEANStack.controller('TodoCtrl',function(userprofile){
    console.log("Initially user Name is : " + userprofile.getName("Jagadeesh"));
	userprofile.setName("Jagadeesh 2");
	console.log("Now user Name is : " + userprofile.getName("Jagadeesh"));
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
	       {value:'todo',label:"To Do"},
	       {value:'components',label:"Components"}
	   ],
	   selectedMenu:"home"
	}
	
	vm.selectItem=function(menuItem){
		vm.model.selectedMenu=menuItem.value;
	}
});

MEANStack.controller('components',function(userprofile, $scope){
    console.log("Initially user Name is : " + userprofile.getName("Jagadeesh"));
	userprofile.setName("Jagadeesh 3");
	console.log("Now user Name is : " + userprofile.getName("Jagadeesh"));
	
	var vm=this;
	vm.model={
	   menuList:[
	       {value:'home',label:"Home"},
	       {value:'about',label:"About"},
	       {value:'todo',label:"To Do"},
	       {value:'componentes',label:"Components"}
	   ],
	   selectedMenu:"home"
	}
	
	vm.selectItem=function(menuItem){
		vm.model.selectedMenu=menuItem.value;
	}
	
	$scope.parentClick=function(){
	    alert("Parent");
	}
	
	$scope.childClick=function(){
	    alert("Child");
	}
});


MEANStack.directive('cfooter',function(){
  return {
     restrict:'AE',
	 template:"This is a footer"
  }
});

MEANStack.directive('spinner',function(){
  return {
     restrict:'AE',
	 scope:{},
	 templateUrl:"templates/spinner.html",
	 controller:function($scope){
		$scope.model={
		   counter:0
		}
		
		$scope.decrement=function(){
		  $scope.model.counter--;
		}
		$scope.increment=function(){
		  $scope.model.counter++;
		}
	 }
  }
});

MEANStack.service('userprofile',function(){
    this.setName=function(name){
		this.name=name;
	}
	this.getName=function(){
		return this.name;
	}
});

MEANStack.factory('userprofilefactory',function(){
    var name;
	return {
		setName:function(name){
			name=name;
		},
		getName:function(name){
			return name;
		}
	}
});




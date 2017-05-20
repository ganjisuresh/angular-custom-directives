var app=angular.module("myapp",[])
app.controller("mycontroller",["$scope",function($scope){
	$scope.message="hai suresh"
}])

app.directive("mydirectiveDirective",function(){  
	return{
		template : "<h1>This IS My Custom Directive </h1>"
	}
})
app.directive("myCustomerDetailsDirective",function(){
	return {
		restrict:'EACM',

		template:"<h1> This  is Custom Directive</h1>",
		replace:true
	}
})  
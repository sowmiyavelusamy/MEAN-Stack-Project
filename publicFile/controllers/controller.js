var app = angular.module('myApp', []);
app.controller('contactCtrl', function($scope, $http) {
    var refresh = function(){

    $scope.message = 'Welcome to SPA angularJs';
        $http.get('/list').success(function(response){
        	console.log("hello world from controlleds")
            $scope.contactList = response;
            $scope.contacts="";
        })
    };
    refresh();
    $scope.addContact = function(){
    	console.log($scope.contacts);
    	$http.post('/list', $scope.contacts).success(function(response){
    		console.log(response);
    		refresh();
    	});
    	

    };
});

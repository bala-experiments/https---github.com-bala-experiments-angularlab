//Creating module - this is a container, an application.
var app = angular.module("myApp", []);

app.run(function($rootScope) {
    $rootScope.firstName = 'Jaya';
    $rootScope.lastName = 'Pazh';
  });

//Creating controller, its a part of module.its kind of a function which provides data to the module.
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.changeName = function() {
        $scope.NewName = $scope.firstName;
    }
});

app.controller("myCtrl2",function($scope){
    $scope.firstname = "Bala";
    $scope.lastname = "Murugan";
});

//Adding directives
app.directive("testdir", function() {
    return {
        template : "<table border='1'>"
            +"<tr><td>Name</td><td>Email</td><td>DOB</td></tr>"
            +"<tr><td>Bala</td><td>bala@gmail.com</td><td>20/04/1987</td></tr>"
            +"<tr><td>Kundhavi</td><td>k@gmail.com</td><td>20/04/1987</td></tr>"
            +"<tr><td>Nachaiyar</td><td>nachiyar@gmail.com</td><td>20/04/1987</td></tr>"
            +"<tr><td>Narpavi</td><td>narpavi@gmail.com</td><td>20/04/1987</td></tr>"
            +"</table>"
    };
});

app.directive("testdirclass", function() {
    return {
        restrict : "C",
        template : "<table border='1'>"
            +"<tr><td>Name</td><td>Email</td><td>DOB</td></tr>"
            +"<tr><td>Bala</td><td>bala@gmail.com</td><td>20/04/1987</td></tr>"
            +"<tr><td>Kundhavi</td><td>k@gmail.com</td><td>20/04/1987</td></tr>"
            +"<tr><td>Nachaiyar</td><td>nachiyar@gmail.com</td><td>20/04/1987</td></tr>"
            +"<tr><td>Narpavi</td><td>narpavi@gmail.com</td><td>20/04/1987</td></tr>"
            +"</table>"
    };
});

//ToDo Controller
app.controller("ToDoCtrl",function($scope){   
    $scope.ToDoList = [];
    $scope.AddToDoList = function(){      
        if($scope.ToDoListInput!=""){
            $scope.ToDoList.push($scope.ToDoListInput);
            $scope.ToDoListInput = "";
        }else{
            alert("Please enter an item");
        }
       
    };

    $scope.DeleteToDo = function(i){     
        $scope.ToDoList.splice(i, 1);  
       
    };
    
});

app.controller("customersCtrl",function($scope){
    $scope.firstname = "Bala";
    $scope.lastname = "Murugan";
});
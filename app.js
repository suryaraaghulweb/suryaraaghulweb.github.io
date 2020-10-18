var myApp = angular.module('Worker', []);


myApp.controller('workerController', ['$scope', function($scope) {
    $scope.work = 'see';
    $scope.instructions="The list below are the workers available in your area. you can contact them with the given contact numbers";
    $scope.Get = function() {
        $scope.work = 'get';
    };

    $scope.Post = function() {
        $scope.work = 'post';
    };
}]);
myApp.controller("child",["$scope", function($scope)
{
  $scope.instructions="This page is divided into two sections you can either get help from the works or else if you are wishing to enroll yourself as a worker you can do it!";
}
]);
 function ArrayCtrl($scope){
  $scope.workerList = [
        {
            name: "Surya",
            occupation:"Plumber",
            price: 500
        },
        {
          name:"Raaghul",
          occupation:"Electrician",
          price: 300
        },
        {
          name:"Ramesh",
          occupation:"Cable man",
          price: 400
        },
        {
          name: "Tharun",
          occupation:"TV operator",
          price:550
        },
        
    ];
}
myApp.service("billing",function()
{
  this.func=function(a,b,c)
  {
      return a+b+c;
  }
}
);
myApp.controller("bill",function($scope,billing)
{
  $scope.gst=100;
  $scope.tax=200;
  $scope.charge=700;
  $scope.b = billing.func($scope.charge,$scope.gst,$scope.tax);
}
);
myApp.factory("picking",function()
{
var facobj={};
facobj.Areaselection=function(a)
{
  if(a=="635110")
  {
    return 'Helper for Hosur is Mr.Surya, You can contact him';
  } 
  else if(a=="625015")
  {
    return 'Helper for Madurai is Mr.Raaghul, You can contact him';
  }
  else
  {
    return 'Sorry no helper available for your area';
  }
}
return facobj;
}
);
myApp.controller("areas",function($scope,picking)
{
  $scope.pick=picking.Areaselection($scope.area);
}
);


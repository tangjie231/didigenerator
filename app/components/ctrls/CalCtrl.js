/**
 * Created by jie.tang on 2015/12/17.
 */
define(["angular","zui","msgBox","../service/pagerService"],function(angular){
    var calCtrl = angular.module("cal", ["pager"]);
    calCtrl.controller("CalCtrl",["$scope","$window","$stateParams","pagerService",function($scope,$window,$stateParams,pagerService){
        console.log($stateParams.content);
        console.log(pagerService.sayHello("service haha"));
        $scope.cells = {}
        for(var i=0;i<31;i++){
            $scope.cells[i] = {content:i};
        }

        $scope.showAlert = function(){
            //$window.location.href="#/cal/hello";
            //MsgBox.alert("hello","hello");
        }
    }]);

    return calCtrl;
});
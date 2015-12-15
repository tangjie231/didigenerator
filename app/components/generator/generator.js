var app = angular.module("generator", []);

app.controller("travelCtrl",function($scope){
    $scope.travels = null;
});

app.directive("travel",function(){
    var item = {
        restrict: "A",
        replace: true,
        scope: {
            item: "=item"
        },
        template: '<ul>'+
                    '<li><span style="">2015-11-11</span></li>'+
                    '<li><span>北美国际上午中心</span></li>'+
                    '<li><span>北京市昌平去天通苑地铁</span></li>'+
                   '</ul>'
    }

    return item;
});


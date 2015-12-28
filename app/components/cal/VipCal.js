/**
 * Created by jie.tang on 2015/12/17.
 */
define(['augular'],function(angular){
    var vipCal = angular.module("vipCal", []);
    vipCal.directive("calCell",function(){
        var cell = {
            restrict: "A",
            replace: true,
            scope: {
                cell: "=cell"
            },
            template:'<div>{{cell.content}}</div>'
        }

        return cell;
    });

    return vipCal;
});
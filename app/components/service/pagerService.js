/**
 * Created by lenovo on 2015/12/21.
 */
define(["angular"],function(angular){
    var pager = angular.module("pager", []);
    pager.service("pagerService", function () {
        var service = {
            sayHello:function(name){
                console.log("hell "+name);
            }
        }
        return service;
    });

    return pager;
});
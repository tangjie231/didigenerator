/**
 * Created by lenovo on 2015/12/15.
 */
require.config({
    baseUrl:'../app',
    paths:{
        jquery:'lib/jquery',
        //index:'components/generator/index',
        angular:'lib/angular'
    },
    shim:{
        'angular':{
            'exports':'angular'
        }
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});
require(['jquery','components/generator/index','app','angular'],function($,index,app,angular){
    //var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['suyun']);
    });
    $(function() {
        index.sayHello("require");
    });
});


/**
 * Created by lenovo on 2015/12/15.
 */
requirejs.config({
    baseUrl:'../app',
    paths:{
        jquery:'lib/jquery',
        index:'components/generator/index'
    }
});
console.log("run here");
requirejs(['jquery','index'],function($,index){
    console.log($);
    $(function() {
        index.sayHello("require");
    });
});


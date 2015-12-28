/**
 * Created by lenovo on 2015/12/15.
 */
require.config({
    baseUrl:'../app',
    paths:{
        jquery:'lib/jquery',
        //index:'components/generator/index',
        angular:'lib/angular',
        uiRouter:'lib/angular-ui-router',
        zui:'lib/zui',
        msgBox:'lib/msg.hint'
    },
    shim:{
        'angular':{
            'exports':'angular'
        },
        'uiRouter':{
            deps:['angular']
           // exports:'uiRouter'
        },
        zui:{
            deps:['jquery'],
            exports:'zui'
        },
        msgBox:{
            deps:['zui'],
            exports:'msgBox'
        }
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});
require(['msgBox','app','angular'],function(msgBox,app,angular){
    //var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['suyun']);
        MsgBox.alert("提示", "提示");
    });
   /* $(function() {
        index.sayHello("require");
    });*/
});


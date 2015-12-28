/**
 * Created by lenovo on 2015/12/16.
 */
({
    mainConfigFile:'main.js',
    baseUrl:'../app',
    optimizeCss: "standard",
    //cssIn: "main.css",
    //out: "css-optimized.css",
    //separateCSS: true,
    paths:{
        jquery:'lib/jquery',
        //index:'components/generator/index',
        angular:'lib/angular',
        uiRouter:'lib/angular-ui-router',
        zui:'lib/zui',
        msgBox:'lib/msg.hint',
        requireLib:"lib/require"
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
    fileExclusiongRegExp:/^(r|build)\.js|.*\.scss$|^(bower|node)/,
    //excludeShallow:["angular","jquery"],
    name:'main',
    out:'main-built.js'
})
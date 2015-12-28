/**
 * Created by jie.tang on 2015/12/28.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rjs = require('gulp-requirejs'),
    nano = require('gulp-cssnano');

var paths = {
    scripts: ['app/lib/*.js', 'app/components/**/*.js'],
    css: ['app/css/zui.css','app/app.css']
};

gulp.task('js', function(){
    rjs({
        mainConfigFile:'./app/main.js',
        baseUrl:'./app',
        optimizeCss: "standard",
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
        //.pipe(concat('main-built.js'))
        //.pipe(gulp.dest("app"))
        .pipe(uglify())
        .pipe(gulp.dest("app"))
});

gulp.task('css', function() {
    return gulp.src(['app/css/zui.css','app/app.css'])
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('app'))
        .pipe(nano())
        .pipe(gulp.dest('app'));
});

gulp.task('watch',function(){
    gulp.watch(paths.scripts,['js']);
    gulp.watch(paths.css,['css']);
});

gulp.task('default',['watch','js','css']);

'use strict';

// Declare app level module which depends on views, and components
define(['angular','uiRouter',
    'components/generator/generator',
    'components/ctrls/calCtrl'],function(angular){
    //console.log(index.sayHello("angular "));angular
    var app = angular.module('suyun', ['generator','ui.router','cal']);
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
             $urlRouterProvider.otherwise("/one");

             $stateProvider.state("one",{
                 url:"/one",
                 templateUrl:"views/temp/one.html"
             }).state("cal",{
                 url:"/cal/{content}",
                 templateUrl:"views/temp/cal.html"
             }).state("cal.inner",{
                 url:"/inner",
                 views:{
                     'first@cal':{
                         url:"",
                         template:"<div>INNER HTML FIRST CONTENT</div>"
                     },
                     'second':{
                         url:"",
                         template:"<div>INNER HTML SECOND CONTENT</div>"
                     }
                 }
             })

     }]);
});


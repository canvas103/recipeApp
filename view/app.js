/**
 * Created by Chenghuijin on 2015/7/6.
 */
var app =  angular.module('menuApp',['ngRoute','menuFactory','menuControllers']);
app.config(function($routeProvider){
    $routeProvider.
        when('/',{
            templateUrl:'menu.html',
            controller:'menuCtrl'
        }).
        when('/ingredient',{
            templateUrl:'ingredient.html',
            controller:'ingredientCtrl'
        }).
        when('/recipe',{
            templateUrl:'recipe.html',
            controller:'recipeCtrl'
        }).otherwise({
            redirectTo:'/'
        });
});
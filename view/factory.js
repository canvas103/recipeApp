/**
 * Created by Chenghuijin on 2015/7/6.
 */
var menuFactory =  angular.module('menuFactory',[]);
var ingredientsUrl="http://localhost:8080/ingredients";
    menuFactory.factory('cook',function($http){
        var recipes=[
                {
                name:"cali",
                ingredients:["beef","onion","carrot","potato"]
                }
            ],
            tempRecipe=[];
        return{
            getIngredients:function(callback){
                $http({
                    method:'get',
                    url:ingredientsUrl,
                    cache:true
                }).success(callback);
            },
            getRecipes:function(callback){
                callback(recipes);
            },
            getTempRecipe:function(callback){
                callback(tempRecipe);
            }
        }
    });
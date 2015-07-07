/**
 * Created by Chenghuijin on 2015/7/6.
 */
var menuCtrl =  angular.module('menuControllers',[]);
menuCtrl.controller('ingredientCtrl',function($scope,cook){
    cook.getIngredients(function(data){
        $scope.ingredients = data;
    });
    $scope.query='';
    $scope.add = function(name,array){
        if (array.indexOf(name) < 0) {
            array.push(name);
            $scope.entered = '';
            $("p#alert").html("");
        } else {
            $("p#alert").html("Item already exists!");
        }
    };
    $scope.remove = function(name){
        var i = $scope.ingredients.indexOf(name);
        $scope.ingredients.splice(i,1);
    };
});
menuCtrl.controller('menuCtrl',function($scope,cook){
    cook.getRecipes(function(data){
        $scope.recipes = data;
    });
    $scope.list=[];
    $scope.mSelected=[];
    $scope.sele= function (item) {
        $scope.mSelected.push(item);
        $scope.list=[];
        $scope.detail($scope.mSelected);
    };
    $scope.dele=function(item){
        var i = $scope.mSelected.indexOf(item);
        $scope.mSelected.splice(i,1);
        $scope.list=[];
        $scope.detail($scope.mSelected);
    };
    $scope.add = function(name,array){
        if (array.indexOf(name) < 0) {
            array.push(name);
        };
    };
    $scope.detail=function(array){
        var x,y;
        for(x in array){
            for(y in array[x].ingredients){
                $scope.add(array[x].ingredients[y],$scope.list);
            }
        }
    }

});
menuCtrl.controller('recipeCtrl',function($scope,cook){
    cook.getTempRecipe(function(data){
        $scope.recipe=data;
    });
    cook.getIngredients(function(data){
        $scope.ingredients = data;
    });
    cook.getRecipes(function(data){
        $scope.recipes = data;
    });
    $scope.add = function(name,array){
        if (array.indexOf(name) < 0) {
            array.push(name);
        } else {
            return;
        }
    };
    $scope.remove = function(name,array){
        var i = array.indexOf(name);
        array.splice(i,1);
    };
    $scope.save=function(){
        $scope.recipe1=[];
        while($scope.recipe[0]){
            $scope.recipe1.push($scope.recipe.shift());
        }
        $scope.recipes.push({name:$scope.entered,
            ingredients:$scope.recipe1});
        $scope.entered='';
    };
});
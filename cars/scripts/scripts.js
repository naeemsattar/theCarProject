// JavaScript Document

var app=angular
			.module("myModule",[])
			.controller("myController", function($scope){
				
				$scope.products=[
					"Milk",
					 "Eggs",
					 "Butter",
					 "Bread",

				];
				$scope.removeItem=function(item){
					(confirm("Do you want to Delete?"))? $scope.products.splice(item,1) : false;
					};
				
				$scope.addNew=function(){
				
				  $scope.errortext = "";
        			if (!$scope.addMe) {return;}        
        			if ($scope.products.indexOf($scope.addMe) == -1) {
            		$scope.products.push($scope.addMe);
        			} else {
            		$scope.errortext = "The item is already in your shopping list.";
        			}
								
					};
				
				});
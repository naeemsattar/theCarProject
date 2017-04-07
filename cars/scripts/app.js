
	var app = angular.module("carsApp",[]);
	app.controller("carsController", function($scope){
	
	$scope.tab = 1;
	$scope.filterTxt = '';
	$scope.showDetails=false;
	
	$scope.selectMenu = function(setTab)
	{
		$scope.tab=setTab;
		
		if(setTab===2)
		{
			$scope.filterTxt = "BMW";
		}
		else if(setTab===3)
		{
			$scope.filterTxt = "HONDA";
		}
		else if(setTab===4)
		{
			$scope.filterTxt = "TOYOTA";
		}
		else
		{
			$scope.filterTxt = "";
		}
	}
	$scope.isSelected = function(val)
	{
		return($scope.tab === val);
	}
	
	$scope.toggleDetails = function()
	{
		$scope.showDetails = !$scope.showDetails;
	}
	
	$scope.cars=[
			{
				id : '1',
				make: 'BMW',
				name: 'BMW',
				image: 'images/bmw/bmw1.png',
				model: '2005',
				price: '4500',
				description: 'A very nice maintained car. Good road grip, no work required. Next inspection March 2017',
				comment: ''
				
			},
				
			{
				id : '2',
				make: 'HONDA',
				name: 'Civic',
				image: 'images/honda/honda1.png',
				model: '2016',
				price: '25000',
				description: 'Honda is a nice car. Good road grip, no work required. Next inspection March 2017',
				comment: ''
				
			},
			{
				id : '3',
				make: 'TOYOTA',
				name: 'yaris',
				image: 'images/toyota/toyota1.png',
				model: '2014',
				price: '11000',
				description: 'Nice small car.',
				comment: ''
				
			},
			{
				id : '4',
				make: 'HONDA',
				name: 'CRV',
				image: 'images/honda/honda2.png',
				model: '2012',
				price: '22000',
				description: 'Nice Car',
				comment: ''
				
			},
			{
				id : '5',
				make: 'BMW',
				name: 'BMW i8',
				image: 'images/bmw/bmw2.png',
				model: '2015',
				price: '22500',
				description: 'Mint condition car. Next inspection December 2017',
				comment: ''
				
			},
			{
				id : '6',
				make: 'BMW',
				name: 'BMW i3',
				image: 'images/bmw/bmw3.png',
				model: '2010',
				price: '12000',
				description: 'Good Car, no work required. Next inspection March 2017',
				comment: ''
				
			},
			{
				id : '7',
				make: 'BMW',
				name: 'BMW i5',
				image: 'images/bmw/bmw4.png',
				model: '2016',
				price: '26000',
				description: 'Like a new car. Few KM drove. Good road grip, no work required. Next inspection August 2017',
				comment: ''
				
			},
			{
				id : '8',
				make: 'BMW',
				name: 'BMW x6',
				image: 'images/bmw/bmw5.png',
				model: '1999',
				price: '3200',
				description: 'Good car. A very nice maintained car. Good road grip, no work required. Next inspection March 2017',
				comment: ''
				
			},
			{
				id : '9',
				make: 'BMW',	
				name: 'BMW m6',
				image: 'images/bmw/bmw6.png',
				model: '2005',
				price: '14500',
				description: 'A very nice maintained car. Good road grip, no work required. Next inspection March 2017',
				comment: ''
				
			},
			]
	});

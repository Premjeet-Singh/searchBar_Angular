
var app = angular.module("instantSearch", []);


app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();


		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});


function InstantSearchController($scope){

	

	$scope.items = [
		{
			
			title: 'Hello, How are you?',
			image: 'ball.png'
		},
		{
			
			title: 'Welcome to the world of angularJS.',
			image: 'ball.png'
		},
		{
			
			title: 'Hey Bruuuhhh,   whatsup.....',
			image: 'ball.png'
		},
		{
			
			title: 'This is the example of instant search...',
			image: 'ball.png'
		},
		{
			
			title: 'angularJS makes easy to customize the code...',
			image: 'ball.png'
		},
		{
			
			title: 'Good morning, Have a nice day..',
			image: 'ball.png'
		},
		{
			
			title: 'mainly angularJS is used for MVC...',
			image: 'ball.png'
		}
	];


}

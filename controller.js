//Angular App Module and controller
var mapctl = angular.module('myApp',[]).controller('mapCtrl', function($scope){

	var mapOptions = {
		zoom: 4,
		//Center of the US
		center: new google.maps.LatLng(40.0000, -98.0000)
	}

	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	$scope.markers = [];

	var infoWindow = new google.maps.InfoWindow();

	//createMarker Function
	var createMarker = function(city, index){
		// console.log(city);
		// console.log(index);

		var latLon = city.latLon.split(',');
		console.log(latLon);
		console.log(typeof(latLon));
		var lat = latLon[0];
		var lon = latLon[1];

		var marker = new google.maps.Marker({
			map: $scope.map,
			position: new google.maps.LatLng(lat, lon),
			title: city.city,
			icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569'
		});

        markerContentHTML = '<div class="infoWindowContent">';
	        markerContentHTML += '<div class="total-pop">Total Population: ' + city.yearEstimate + '</div>';
    	    markerContentHTML += '<div class="pop-dens-last-year">2010 Census: ' + city.lastCensus + '</div>';
	        markerContentHTML += '<div class="pop-change">Population Change %: ' + city.change + '</div>';
    	    markerContentHTML += '<div class="pop-dens">Population Density: ' + city.lastPopDensity + '</div>';
        	markerContentHTML += '<div class="state">State: ' + city.state + '</div>';
        	markerContentHTML += '<div class="land-area">Land Area: ' + city.landArea + '</div>';
        	markerContentHTML += '<a href="#" onclick="getDirections('+lat+','+lon+')">Get directions</a>';
        markerContentHTML += '</div>';



	}

	$scope.cities = cities;
	for(i = 0; i < cities.length; i++){
		createMarker(cities[i],i)
	}
});







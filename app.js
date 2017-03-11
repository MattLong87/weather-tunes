"use strict";
//When button is pressed, update state object with values
//from dropdowns, then put results into results section

//single state object
var state = {
	selectedGenre: "",
	selectedWeather: "",
	userLatitude: 0,
	userLongitude: 0,
	locationAvailable: false,
	userWeatherCondition: ""
};

//Event listener for form submit
$("form").submit(function(e){
	e.preventDefault();
	var genre = $(this).find(".js-genre").val();
	var weather = $(this).find(".js-weather").val();
	updateState(genre, weather);
	if (state.selectedWeather == "mycurrent"){
		getUserLocation(state, function(){
			displayState(state);
		});
	}

})

//State modification functions
function updateState(genre, weather){
	state.selectedGenre = genre;
	state.selectedWeather = weather;
}

function getUserLocation(state, callback){
	if ("geolocation" in navigator){
		state.locationAvailable = true;
		navigator.geolocation.getCurrentPosition(function(position){
			state.userLatitude = position.coords.latitude;
			state.userLongitude = position.coords.longitude;
			callback(state);
		});
	}
	else{
		state.locationAvailable = false;
	}
}

function displayState(state){
	console.log(state);
}
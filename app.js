"use strict";
//When button is pressed, update state object with values
//from dropdowns, then put results into results section

//single state object
var state = {
	genre: "",
	weather: "",
	userLatitude: 0,
	userLongitude: 0,
	locationAvailable: false
};

//Event listener for form submit
$("form").submit(function(e){
	e.preventDefault();
	var genre = $(this).find(".js-genre").val();
	var weather = $(this).find(".js-weather").val();
	updateState(genre, weather);
	if (state.weather == "mycurrent"){
		getUserLocation(state);
	}

})

//State modification functions
function updateState(genre, weather){
	state.genre = genre;
	state.weather = weather;
}

function getUserLocation(state){
	if ("geolocation" in navigator){
		state.locationAvailable = true;
		navigator.geolocation.getCurrentPosition(function(position){
			state.userLatitude = position.coords.latitude;
			state.userLongitude = position.coords.longitude;
			console.log(state);
		});
	}
	else{
		state.locationAvailable = false;
	}
}
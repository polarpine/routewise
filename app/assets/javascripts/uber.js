var userLatitude
  , userLongitude
  , destinationLatitude = 37.485215
  , destinationLongitude = -122.236355;

 var uberClientId = "QUbBZcCkCWkSQK1ype39BqtDwzaRCAKu"
  , uberServerToken = "vxn0fS7wsl0KgEyP3XFPRvTmYrVkYlnNWt3n54jP";

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});

function myConverter(json){
	console.log(json)
}
function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    data: { 
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: destinationLatitude,
      end_longitude: destinationLongitude,
      server_token: uberServerToken
    },
	  dataType: 'jsonp',
	  jsonpCallback: 'myConverter',
	  jsonp: 'callback',
   		
   success: function(result) {
    	console.log(result);
     }
  });
}


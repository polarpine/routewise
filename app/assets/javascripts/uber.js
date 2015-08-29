var userLatitude, userLongitude, 
	destinationLatitude = 37.485215, 
	destinationLongitude = -122.236355;

 var uberClientId = "QUbBZcCkCWkSQK1ype39BqtDwzaRCAKu",
  uberServerToken = "ZJVI3W-KWBLwR_zNayrZkt1sVY7hBNYZVuK36kHh";

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + uberServerToken
    },
    data: { 
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: destinationLatitude,
      end_longitude: destinationLongitude,
      server_token: uberServerToken
    },
   		
   success: function(result) {
      console.log('Uber Estimate: ', result['prices'][0]['estimate']);
     }
  });
}



var userLatitude = 37.784633, userLongitude = -122.397414, 
	destinationLatitude = 37.784633, 
	destinationLongitude = -122.397414;

 

 var uberClientId = "QUbBZcCkCWkSQK1ype39BqtDwzaRCAKu",
  uberServerToken = "ZJVI3W-KWBLwR_zNayrZkt1sVY7hBNYZVuK36kHh";


// navigator.geolocation.watchPosition(function(position) {
//     // Update latitude and longitude
//     userLatitude = position.coords.latitude;
//     userLongitude = position.coords.longitude;
// });


function getEstimatesForUserLocation(latitude,longitude, destinationLatitude, destinationLongitude) {
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
      $("#uber p").html('Uber Estimate: ' + result['prices'][0]['estimate']),
      $("#uber-call").css('display','block');

     }
  });
}


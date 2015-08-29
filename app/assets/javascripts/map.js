function initMap() {
  var directionsService = new google.maps.DirectionsService;

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: pos.lat, lng: pos.lng},
        zoom: 6
      });

      map.setCenter(pos);
      calculateAndDisplayRoute(directionsService, pos, map);
    }, function() {
      console.log("Geolocation available but timed out.");
    });

  } else {
    // Browser doesn't support Geolocation
    console.log("Geolocation unavailable.");
  }
}

function calculateAndDisplayRoute(directionsService, pos, map) {
  directionsService.route({
    origin: pos,
    destination: destination,
    travelMode: google.maps.TravelMode.WALKING,
    provideRouteAlternatives: true
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var i = 0, len = response.routes.length; i < len; i++) {
        new google.maps.DirectionsRenderer({
          map: map,
          directions: response,
          routeIndex: i
        });
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
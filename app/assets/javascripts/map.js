var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];

function initMap() {
  var directionsService = new google.maps.DirectionsService();

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
      getCrimesSanFrancisco(map);
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
    // origin: pos,
    origin: "devbootcamp",
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

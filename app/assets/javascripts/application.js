// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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
    destination: "701 1st Avenue, Sunnyvale, CA 94089",
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
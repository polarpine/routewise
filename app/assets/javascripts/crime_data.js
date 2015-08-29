//Call getCrimesSanFrancisco to return array of hash objects of crimes.

function getCrimesSanFrancisco(map) {
  $.ajax({
    url: "https://data.sfgov.org/resource/tmnf-yvry.json",
   success: function(result) {
      crimes = crimeSorter(result);
      displayHeatMap(map, crimes);
     }
  });
}

function crimeSorter(result){
  var crime_coords = []
  for (i = 0; i < result.length; i++ ){
    coord_set = {'lat': result[i]['y'], 'lon': result[i]['x'], 'category': result[i]['category']};
    crime_coords.push(coord_set);
  }
  return crime_coords;
}

function displayHeatMap(map, crimes) {
  var mappedCrimes = processData(crimes);
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: mappedCrimes,
    map: map,
    radius: 30,
    opacity: 1,
    gradient: gradient
  });
}

function processData(crimes) {
  var processed = [];
  for (i = 0; i < crimes.length; i++ ){
    crime =  new google.maps.LatLng(crimes[i].lat, crimes[i].lon);
    processed.push(crime);
  }
  return processed;
}
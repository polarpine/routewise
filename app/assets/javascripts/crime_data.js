//Call getCrimesSanFrancisco to return array of hash objects of crimes.

function getCrimesSanFrancisco() {
  $.ajax({
    url: "https://data.sfgov.org/resource/tmnf-yvry.json",
   success: function(result) {
      crimes = crimeSorter(result);
      return crimes

     }
  });
}
 
function crimeSorter(result){
      var crime_coords = []
      for (i = 0; i < result.length; i++ ){
        coord_set = {'lat': result[i]['y'], 'lon': result[i]['x'], 'category': result[i]['category']};
        crime_coords.push(coord_set);
      }
      return crime_coords
}



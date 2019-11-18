const mapboxgl = require("mapbox-gl");

const MarkerFunc = function(type, coordinates){
let newMarker = document.createElement("div")
// type = type.toLowerCase()
if(type === 'hotel') {
  newMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
}
else if(type === 'restaurant'){
  newMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
}
else {
  newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
}

newMarker.style.width = "32px";
newMarker.style.height = "39px";

let marker = new mapboxgl.Marker(newMarker).setLngLat(coordinates)

return marker;
}


module.exports = MarkerFunc()

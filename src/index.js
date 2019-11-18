// console.log('Hello from Kiana and Gita')

const mapboxgl = require("mapbox-gl");
const markerFunc = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lhbmF3b250Z2giLCJhIjoiY2szNHBjejQ3MTBicTNsbW1wcXU4ODVxYiJ9.p-fPIeIjQANUN5W6UPRBCg';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });
});

// let fullstackMarker = document.createElement("div")
// fullstackMarker.style.width = "32px";
// fullstackMarker.style.height = "39px";
// fullstackMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(fullstackMarker).setLngLat([-74.009151, 40.705086]).addTo(map)

const loadMarker = markerFunc('activity', [-74.009151, 40.705086]);
loadMarker.addTo(map);


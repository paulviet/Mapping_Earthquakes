// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    // https://docs.mapbox.com/api/maps/styles/
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map); // Then we add our 'graymap' tile layer to the map.

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/paulviet/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });

//SKILL DRILL  add a popup marker
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties.name && feature.properties.city) {
      layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>code: " + feature.properties.faa);
  }
}
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {onEachFeature: onEachFeature}).addTo(map);
});


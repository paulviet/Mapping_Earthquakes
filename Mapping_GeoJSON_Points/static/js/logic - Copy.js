// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30, 30], 2);

// Alternative to setView above
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/satellite-streets-v11',
//     // https://docs.mapbox.com/api/maps/styles/
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// }).addTo(map); // Then we add our 'graymap' tile layer to the map.

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/paulviet/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
// L.geoJson(features).bindPopup("<h2>" +  + "</h2> <hr> <h3>Airport name: " + properties + "</h3>")
// .addTo(map);
});



// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  //console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data,
  {
    onEachFeature: function (properties, layer) {
      layer.bindPopup("<h2>" + city + ", " + city + "</h2> <hr> <h3>Population " +city + "</h3>")
    }
  }
  ).addTo(map);
});



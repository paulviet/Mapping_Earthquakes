// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Alternative to setView above
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    // https://docs.mapbox.com/api/maps/styles/
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map); // Then we add our 'graymap' tile layer to the map.

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one circleMarker for each city.
cityData.forEach(function(city) {
    console.log(city);
    // L.circleMarker(city.location, {
    //     radius: city.population/100000,
    //     color: 'orange'
    // }).addTo(map).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
});


// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);


  // Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"
      },
      "geometry":{
          "type":"Point",
          "coordinates":[-122.375,37.61899948120117]
      }
    }
]};


// var geojsonFeature = {
//   "type": "Feature",
//   "properties": {
//       "name": "Coors Field",
//       "amenity": "Baseball Stadium",
//       "popupContent": "This is where the Rockies play!"
//   },
//   "geometry": {
//       "type": "Point",
//       "coordinates": [-104.99404, 39.75621]
//   }
// };

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
   }
}).addTo(map);

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([34.0522, -118.2437], 14);

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
    id: 'mapbox/dark-v10',
    // https://docs.mapbox.com/api/maps/styles/
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map); // Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map)
//     .bindPopup('Welcome to LA.<br> go see LACMA Lights.')
//     .openPopup();

// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
//     }).addTo(map)
//     .bindPopup('Welcome to LA.<br> go see LACMA Lights.')
//     .openPopup();

let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
    }).addTo(map)
    .bindPopup('Welcome to LA.<br> go see LACMA Lights.')
    .openPopup();
// script.js

// Initialize the map using Leaflet
var map = L.map('map').setView([51.505, -0.09], 13);

// Load and add tile layers
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Button event handler example
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Function to switch tabs
function switchTab(tabId) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Interactive region selection on the map
map.on('click', function(e) {
    var marker = L.marker(e.latlng).addTo(map);
    marker.bindPopup('You clicked here: ' + e.latlng.toString()).openPopup();
});

// Dynamic content update example
function updateContent(newContent) {
    document.getElementById('content').innerHTML = newContent;
}
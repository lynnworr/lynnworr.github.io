d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(
    function(responseData)
    {
    createMarkers(responseData);
    }
);

function createMarkers(bikeData)
{
    var stations = bikeData.data.stations;

    var bikeMarkers = [];

    for (var i = 0; i < stations.length; i++)
    {
        let currentStation = stations[i];

        let currentMarker = L.marker([currentStation.lat, currentStation.lon])
            .bindPopup(`<center>
            <h2>${currentStation.name}</h2><hr>
            Bike Capacity: <b>${currentStation.capacity}</b>
            </cemter>`);

            bikeMarkers.push(currentMarker);
    }

    createMap(L.layerGroup(bikeMarkers));

}

function createMap(bikeMarkers)
{
// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// grayscale layer
var grayscale = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

// water color layer
var waterColor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

    var baseMaps = {
        "Street Map": streetmap,
        "Grayscale Map": grayscale,
        "Watercolor Map": waterColor
    };

    var overlayMaps = {
        "Bike Stations": bikeMarkers
    };

    var myMap = L.map("map", {
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [streetmap, bikeMarkers]

    });

    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false 
    }).addTo(myMap);

}
var myMap = L.map("map", 
{
    center: [33.7488, -84.3877],
    zoom: 4
});

// add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var cities = [
    {
        name: "New York",
        location: [40.7128, -74.0059],
        population: 8804190
    },
    {
        name: "Los Angeles",
        location: [34.0522, -118.2437],
        population: 3898747
    },
    {
        name: "Houston",
        location: [29.7604, -95.3698],
        population: 2304580
    },
    {
        name: "Omaha",
        location: [41.2524, -95.9980],
        population: 486051
    },
    {
        name: "Chicago",
        location: [41.8781, -87.6298],
        population: 2746388
    }
];

function markerSize(pop)
{
    return Math.sqrt(pop) * 40;
}

for(var i = 0; i < cities.length; i++)
{
    L.circle(
        cities[i].location,
        {
            color: "black",
            fillColor: "blue",
            fillOpacity: 0.75,
            radius: markerSize(cities[i].population)
        }
    )
    .bindPopup(
        `<h1>${cities[i].name}</h1><hr><h3>Population: ${cities[i].population} </h3></center>`
    )
    .addTo(myMap)
}
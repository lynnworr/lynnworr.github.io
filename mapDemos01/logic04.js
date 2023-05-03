var myMap = L.map("map", 
{
    center: [33.7488, -84.3877],
    zoom: 10
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


var marker = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello from Atlanta, Ga, USA"
    }
).addTo(myMap);


marker.bindPopup("Hello From Atlanta, GA");


L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        fillColor: "yellow",
        radius: 900,
        fillOpacity: .80
    }
).addTo(myMap)


L.rectangle(
    [
        [33.7738, -84.3656],
        [33.7718, -84.3646]
    ],
    {
        color: "black",
        fillColor: "yellow",
        stroke: true,
        weight: 2
        
    }
).addTo(myMap)

L.polyline([
    [33.7573, -84.3963],
    [33.7553, -84.4006]
],

    {
        color: "red"
    }

).addTo(myMap)

L.polygon(
    [
        [34.1030, -83.8180],
        [34.1020, -83.8170],
        [34.1010, -83.8170]
    ],

    {
        color: "red"
    }
).addTo(myMap);


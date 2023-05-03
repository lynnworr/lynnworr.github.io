var myMap = L.map("map", 
{
    center: [33.7488, -84.3877],
    zoom: 10
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var marker = L.marker().addTo(myMap);
    
    [33.7488, -84.3877],
    {
        title: "Hello from Atlanta, Ga, USA"
    }



marker.bindPopup("Hello From Atlanta, GA");

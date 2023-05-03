var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 12
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var dataURL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";



d3.json(dataURL).then(
    function(data) 
    {
        console.log(data);

        for(var i = 0; i < data.length; i++)
        {
            var location = data[i].location;

            var dateOptions = {
                weekday: 'long',
                year: "numeric",
                month: "long",
                day: "numeric"

            }

            L.marker([location.coordinates[1], location.coordinates[0]])
            .bindPopup(
                `${new Date(data[i].date).toLocaleDateString("en-US", dateOptions)}<hr>
                <b>Address: </b>${data[i].address} <br>
                <b>Description: </b>${data[i].descript} <br
                <b>Time: </b>${data[i].time}`
                
            )
            .addTo(myMap)

        }
    }
);



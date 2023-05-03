// create traces

let gooseBumpsBooks = ['Monster Blood', 'It came from beneath the sink', 'why i am afraid of bees'];

let timesRead = [3, 6, 4];

let trace1 = {
    x: gooseBumpsBooks,
    y: timesRead,
    type: "bar",
    name: "Dr. A reads"
};

var data = [trace1];

var layout = {
    title: "Dr. A books"
};

Plotly.newPlot('plot1', data, layout);

// add another reader
let timesRead2 = [6, 3, 1];

let trace2 = {
    x: gooseBumpsBooks,
    y: timesRead2,
    type: 'bar',
    name: "The other person reads"
};

let data2 = [trace1, trace2];

var layout2 = {
    title: 'Dr. A and the other Goosebump people'
}

Plotly.newPlot('plot2', data2, layout2);

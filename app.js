// from data.js
var sightingsData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");

// console.log(tableData);

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log("filteredData", inputValue)

    var filteredData = sightingsData.filter(sightings => sightings.datetime === inputValue);
    console.log(filteredData);

   data.forEach((ufoSightings) => {
     //  console.log(filteredData);
        var row = tbody.append("tr");
          Object.entries(ufoSightings).forEach(([key, value]) => {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
          })
    })

});

var resetButton = d3.select("#reset-btn")

resetButton.on("click", function() {

    tbody.html(" ");
    
    tableData = data;

    tableData.forEach((report) => {

        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
    
            var cell = row.append("td");
            cell.text(value);
    
        });

    });

});




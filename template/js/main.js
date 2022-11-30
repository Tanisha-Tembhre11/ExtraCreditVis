// Hint: This is a good place to declare your global variables
var data;


// This function is called once the HTML page is fully loaded by the browser
document.addEventListener('DOMContentLoaded', function () {
    // Hint: create or set your svg element inside this function
 
    // This will load your CSV file and store them into two arrays.
    Promise.all([d3.csv('data/data.csv')])
         .then(function (values) {
             console.log('loaded data.csv');
             data = values[0];
 
             // Hint: This is a good spot for doing data wrangling
 
 
             drawBubbleChart();
         });
 });
 
 // Use this function to draw the bubble chart.
 function drawBubbleChart() {
     console.log('trace:drawBubbleChart()');
 }
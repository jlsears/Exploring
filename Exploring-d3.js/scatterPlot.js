
// *********************************
// VALUES
// *********************************
 
var xMaleLE = [55, 70, 65, 60, 70, 67, 70, 80];
var yFemaleLE = [57, 58, 55, 57, 62, 75, 83, 85];
var rMedianIncome =[4800, 4900, 5200, 10000, 15000, 20000, 25000, 27000 ];
var tCountry = ["North Korea", "Ethiopia", "Vietnam", 
  "South Africa", "Italy", "France","United Kingdom", "United States"];
var cCountry = ["rgb(127, 201, 127)","rgb(190, 174, 212)","rgb(253, 192, 134)",
  "rgb(255, 255, 153)", "rgb(56, 108, 176)", "rgb(240, 2, 127)",
  "rgb(191, 91, 23)", "rgb(102, 102, 102)"]

var margin = {top: 20, right: 15, bottom: 60, left: 60}
, width = 730 - margin.left - margin.right
, height = 730 - margin.top - margin.bottom;


// *********************************
// COORDINATE DESIGN
// *********************************

// Function that creates x positions

var x = d3.scale.linear()
	.domain([d3.min(xMaleLE) - 20, d3.max(xMaleLE) + 20])
	.range([0, width]);

// Function that creates y positions
// Using xMaleLE to set domain in order to maintain 1:1 aspect ratio in graph

var y = d3.scale.linear()
	.domain([d3.min(xMaleLE) - 20, d3.max(yFemaleLE) + 20])
	.range([height, 0]);

// Function that creates radius lengths

var r = d3.scale.linear()
	.domain([d3.min(rMedianIncome), d3.max(rMedianIncome)])
	.range([5, 35]);


// *********************************
// SETTING UP SVG CONTAINER GROUP
// *********************************

var chart = d3.select('#scatterplot')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart');

var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')


// *********************************
// X & Y AXIS
// *********************************

// Creating x axis

var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

// Creating y axis

var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

// Adding x axis to the chart
// The translate transformation specifies a translation by x and y

main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

// Adding y axis to the chart

main.append('g')
	.attr('transform', 'translate(0, 0)')
	.attr('class', 'main axis date')
	.call(yAxis);


// *********************************
// GENERATING SCATTERPLOT
// *********************************

// Creating svg group element (container for all child svg elements)

var g = main.append("svg:g");

// Binding female life expectancy data, drawing as a circle
// And setting coordinates with corresponding functions

g.selectAll('scatterplot')
	.data(yFemaleLE)
	.enter().append("svg:circle")
	.attr("cy", function(d){  return y(d);  })
	.attr("cx", function(d,i){  return x(xMaleLE[i]);  })
	.attr("r", function(d,i){  return r(rMedianIncome[i]);  })
	.style("fill", function(d,i){  return cCountry[i];});

// Overlaying country names on data points

g.selectAll('scatterplot')
	.data(yFemaleLE)
	.enter().append("text")
	.attr("y", function(d){  return y(d);  })
	.attr("x", function(d,i){ return x(xMaleLE[i]);})
	.attr("dx", function(d,i){ return -r(rMedianIncome[i]);})
	.text(function(d,i){ return tCountry[i];})
	.style("font-size", function(i){  return i/5  });


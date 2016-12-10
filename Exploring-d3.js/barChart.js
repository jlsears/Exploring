
// *********************************
// INITIAL GOLD RECTANGE
// *********************************

var rectDemo = d3.select("#rect1")
	.append("svg:svg")
	.attr("width", 400)
	.attr("height", 300);

rectDemo.append("svg:rect")
	.attr("x", 100)
	.attr("y", 100)
	.attr("height", 100)
	.attr("width", 200)
	.style("fill", "gold");


// *********************************
// BAR CHART
// *********************************

// ***VALUES***

var data = [{year: 2006, deaths: 55},
  {year: 2007, deaths: 63},
  {year: 2008, deaths: 69},
  {year: 2009, deaths: 81},
  {year: 2010, deaths: 74},
  {year: 2011, deaths: 79},
  {year: 2012, deaths: 93}];

var barWidth = 40;
var width = (barWidth + 10) * data.length;
var height = 200;


// ***FOR CREATING COORDINATES***

var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
var y = d3.scale.linear().domain([0, d3.max(data, function(data){ return data.deaths})]).rangeRound([0, height]);


// ***SETTING UP CONTAINER/CANVAS***

var barBasic = d3.select("#bar-basic")
	.append("svg:svg")
	.attr("width", width)
	.attr("height", height);


// ***CREATING/APPENDING BARS***

barBasic.selectAll("rect")
	.data(data)
	.enter()
	.append("svg:rect")
	.attr("x", function(data, i){ return x(i); })
	.attr("y", function(data){ return height - y(data.deaths); })
	.attr("height", function(data){ return y(data.deaths); })
	.attr("width", barWidth)
	.attr("fill", "purple");

var xScale = d3.scale.linear().domain([0, 20]).range(([0, 100]));


// ***ADDING TEXT FOR DATA POINTS TO BARS***

barBasic.selectAll("text")
	.data(data)
	.enter()
	.append("svg:text")
	.attr("x", function(data, index){ return x(index) + barWidth; })
	.attr("y", function(data){ return height - y(data.deaths); })
	.attr("dx", -barWidth/2)
	.attr("dy", "1.2em")
	.attr("text-anchor", "middle")
	.text(function(data){ return data.deaths; })
	.attr("fill", "white");

barBasic.selectAll("text.yAxis")
	.data(data)
	.enter().append("svg:text")
	.attr("x", function(data, index) { return x(index) + barWidth; })
	.attr("y", height)
	.attr("dx", -barWidth/2)
	.attr("text-anchor", "middle")
	.attr("style", "font-size: 12; font-family: Helvetica, sans-serif")
	.text(function(data){ return data.year; })
	.attr("transform", "translate(0, 18)")
	.attr("class", "yAxis");

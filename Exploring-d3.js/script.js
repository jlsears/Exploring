var w=960,h=500,
svg1=d3.select("#chart")
.append("svg")
.attr("width",w)
.attr("height",h)
.attr("class", "chart1");

var svg2 = d3.select("#chart2")
.append("svg")
.attr("width", w)
.attr("height", h)
.attr("class", "chart2")
.style("background-color", "darkseagreen")
.style("fill", "white")
.style("border", "5px solid")
.style("border-color", "peru")
.style("font-family", "arial")
.style("font-size", "25px");
 
var text=svg1
.append("text")
.text("hello world")
.attr("y", 250)
.attr("x", 600);

var moreText = svg2
.append("text")
.text("I said 'ello'")
.attr("y", 250)
.attr("x", 600);

var radiusData = [10, 15, 20, 25, 30];

// new and improved multidimensional array: radius AND color
var circleData = [[10, "rgb(246, 239, 247)"], [15, "rgb(189,201,225)"], [20, "rgb(103,169,207)"], [25, "rgb(28,144,153)"], [30, "rgb(1,108,89)"]];

// selecting div
fancierCircle = d3.select("#bestCircle")
	.append("svg:svg")
	.attr("width", circleData.length * 100)
	.attr("height", 100);

// selecting all the circles in the above div
fancierCircle.selectAll("circle")
	.data(circleData)
	.enter()
	.append("circle")
	.attr("cx", function(d) { return d[0] * 14})
	.attr("cy", 50)
	.attr("r", function(d) { return d[0]})
	.style("fill", function(d) {return d[1]});



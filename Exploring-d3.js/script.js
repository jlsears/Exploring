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

// selecting div
fancierCircle = d3.select("#bestCircle");

// selecting all the circles in the above div
fancierCircle.selectAll("circle")
	.attr("r", 50)
	.style("stroke", "darkseagreen")
	.style("fill", "orange")
	.data(radiusData)
	.attr("r", function(d) { return d});



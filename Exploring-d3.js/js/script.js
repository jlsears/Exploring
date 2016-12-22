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
	.append("svg:svg") // adding svg container and returning current selection
	.attr("width", circleData.length * 100)
	.attr("height", 100);

// selecting all the circles in the above div
fancierCircle.selectAll("circle")
	.data(circleData)
	.enter() // preparing to add elements
	.append("circle") // adding child circle below svg parent node
	.attr("cx", function(d) { return d[0] * 14})
	.attr("cy", 50)
	.attr("r", function(d) { return d[0]})
	.style("fill", function(d) {return d[1]});

var sampleSVG = d3.select("#mouseEvent_example")
	.append("svg:svg")
	.attr("width", 200)
	.attr("height", 200);

var source = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

var color = source[Math.floor(Math.random()*source.length)];

sampleSVG.append("svg:rect")
	.style("stroke", "gray")
	.style("fill", "white")
	.attr("x", 50)
	.attr("y", 50)
	.attr("width", 100)
	.attr("height", 100)
	//.on("mouseover", function(){d3.select(this).style("fill", "green");})
	//.on("mouseout", function(){d3.select(this).style("fill", "white");})
	.on("click", function(){d3.select(this).style("fill", function(){return source[Math.floor(Math.random()*source.length)];});})
	.on("mouseout", function(){d3.select(this).style("fill", "white");});

var buttonData = [[10, 20, 20, "rgb(224, 236, 244)"], [30, 50, 50, "rgb(136, 86, 167)"]];

var w = 300, h = 300;

var myExample = d3.select("#example99")
	.append("svg:svg")
	.attr("width", w)
	.attr("height", h);

myExample.selectAll("circle")
	.data(buttonData)
	.enter()
	.append("circle")
	.attr("r", function(d){return d[0]})
	.attr("cx", function(d){return d[1]})
	.attr("cy", function(d){return d[2]})
	.style("stroke", "black")
	.style("fill", function(d){return d[3]});

d3.select("#example99 button").on("click", function(){
	myExample.selectAll("circle")
	.attr("cx", function(){return Math.random() * w})
	.attr("cy", function(){return Math.random() * h});
})
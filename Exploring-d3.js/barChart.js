
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


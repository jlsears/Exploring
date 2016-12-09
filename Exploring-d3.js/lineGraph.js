
var data2 = [1, 3, 4, 3, 6, 1, 8, 2, 4, 1, 3, 4, 1];
var data1 = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 7];

var w = 500;
var h = 200;
var margin = 20;

var y = d3.scale.linear().domain([0, d3.max(data1)]).range([0 + margin, h - margin]);
var x = d3.scale.linear().domain([0, data1.length]).range([0 + margin, w - margin]);

var vis = d3.select("#viz")
	.append("svg:svg")
	.attr("width", w)
	.attr("height", h);

var g = vis.append("svg:g")
	.attr("transform", "translate(0, 200)");

g.append("svg:line")
	.transition()
	.duration(1000)
	.style("stroke", "black")
	.attr("x1", x(0))
	.attr("y1", -1 * y(0))
	.attr("x2", x(w))
	.attr("y2", -1 * y(0));

g.append("svg:line")
	.transition()
	.duration(1000)
	.style("stroke", "black")
	.attr("x1", x(0))
	.attr("y1", -1 * y(0))
	.attr("x2", x(0))
	.attr("y2", -1 * y(d3.max(data1)));

g.selectAll(".xLabel")
	.data(x.ticks(5))
	.style("font-size", "9pt")
	.enter()
	.append("svg:text")
	.transition()
	.duration(1000)
	.attr("class", "xLabel")
	.text(String)
	.attr("x", function(i){ return x(i) })
	.attr("y", 0)
	.attr("text-anchor", "middle");

g.selectAll(".yLabel")
	.data(y.ticks(4))
	.style("font-size", "9pt")
	.enter()
	.append("svg:text")
	.transition()
	.duration(1000)
	.attr("class", "yLabel")
	.text(String)
	.attr("x", 0)
	.attr("y", function(i){ return -1 * y(i) })
	.attr("text-anchor", "right")
	.attr("dy", 4);

g.selectAll(".xTicks")
	.data(x.ticks(5))
	.enter()
	.append("svg:line")
	.transition()
	.duration(1000)
	.style("stroke", "black")
	.attr("class", "xTicks")
	.attr("x1", function(i){ return x(i) })
	.attr("y1", -1 * y(0))
	.attr("x2", function(i){ return x(i) })
	.attr("y2", -1 * y(-0.3));

g.selectAll(".yTicks")
	.data(y.ticks(4))
	.enter()
	.append("svg:line")
	.transition()
	.duration(1000)
	.style("stroke", "black")
	.attr("class", "yTicks")
	.attr("y1", function(d){ return -1 * y(d) })
	.attr("x1", x(-0.3))
	.attr("y2", function(d){ return -1 * y(d) })
	.attr("x2", x(0));
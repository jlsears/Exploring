var w=960,h=500,
svg=d3.select("#chart")
.append("svg")
.attr("width",w)
.attr("height",h)
.attr("class", "chart1");

var svg2 = d3.select("#chart2")
.append("svg")
.attr("width", w)
.attr("height", h)
.attr("class", "chart2");;
 
var text=svg
.append("text")
.text("hello world")
.attr("y", 250)
.attr("x", 600);

var moreText = svg2
.append("text")
.text("I said 'ello'")
.attr("y", 250)
.attr("x", 600);

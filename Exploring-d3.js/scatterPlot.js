 
  var xMaleLE = [55, 70, 65, 60, 70, 67, 70, 80];
  var yFemaleLE = [57, 58, 55, 57, 62, 75, 83, 85];
  var rMedianIncome =[4800, 4900, 5200, 10000, 15000, 20000, 25000, 27000 ];
  var tCountry = ["North Korea", "Ethiopia", "Vietnam", 
    "South Africa", "Italy", "France","United Kingdom", 
    "United States"];
  var cCountry = ["rgb(127, 201, 127)","rgb(190, 174, 212)","rgb(253, 192, 134)",
    "rgb(255, 255, 153)", "rgb(56, 108, 176)", "rgb(240, 2, 127)",
    "rgb(191, 91, 23)", "rgb(102, 102, 102)"]

var x = d3.scale.linear()
	.domain([d3.min(xMaleLE)-20, d3.max(xMaleLE)+20])
	.range([0, width]);

var y = d3.scale.linear()
	.domain([d3.min(xMaleLE)-20, d3.max(yFemaleLE)+20])
	.range(height, 0);

var r = d3.scale.linear()
	.domain([d3.min(rMedianIncome), d3.max(rMedianIncome)])
	.range([5, 35]);

var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(yAxis);

main.append('g')
	.attr('transform', 'translate(0, 0)')
	.attr('class', 'main axis date')
	.call(xAxis);

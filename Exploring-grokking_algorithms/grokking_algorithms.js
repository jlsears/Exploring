
// A space for trying out algorithms as examined in the book "Grokking Algorithms," by Aditya Bhargava
// https://www.manning.com/books/grokking-algorithms

// Chapter 3: Recursion

// Remember to think "turtles almost all the way up" in this case

var startHere = 5;

var tryRecursion = function(x) {
	if(x == 1) {
		return x;
	} else {
		return x * tryRecursion(x-1);
	}
};

var goRecursion = tryRecursion(startHere);


// Chapter 4: Quicksort


var handyArray = [8, 48, 6, 9, 24, 32, 3, 4];

var quicklyNow = function(sortThis) {

	if(sortThis.length < 2) {
		return sortThis;
	}
	else{
		var less = [];
		var greater = [];
		var findPivot = [sortThis[((sortThis.length/2)-1).toFixed()]];
	
		sortThis.forEach(function(item) {
			if(item < findPivot[0]){ 
				less.push(item);
			}
			else{if(item > findPivot[0]){ 
				greater.push(item);
			}}
		})
		return quicklyNow(less).concat(findPivot, quicklyNow(greater));
	}
};


// Chapter 6: Breadth-First Search

// graph consisting of nodes and edges

var holdingInfo = {

	"Buttercup": ["Harry", "Bubbles", "Hermione", "Ron"],
	"Bubbles": ["Margot", "Richie"],
	"Blossom": ["Suzie", "Bertram"],
	"Harry": ["Ron", "Hermione"],
	"Hermione": ["Harry", "Ron", "Blossom"],
	"Ron": ["Harry", "Hermione"],
	"Margot": ["Bubbles"],
	"Richie": [],
	"Suzie": [],
	"Bertram": []

}

// In this scenario, someone with an "m" at the end of their name is a mango seller

var mangoSeller = function(potentialSeller) {
	if(potentialSeller[potentialSeller.length-1] == 'm') {
		return true;
	}
	else { return false;}
}

// Determining whether Buttercup knows a mango seller

var breadthFirst = function(searchables) {

	var searchQueue = [];
	searchQueue = searchQueue.concat(holdingInfo[searchables]);
	var searched = [];

	while(searchQueue) {

		var person = searchQueue.shift();

		if(searched.includes(person) == false) {

			if(mangoSeller(person)){
				console.log(person + " is a mango seller!");
				return true;
			}
			else{
				searchQueue = searchQueue.concat(holdingInfo[person]);
			}
		}
	}
	return false;
}

// Chapter 7: Dijkstra's Algorithm

// Graph table -- where the neighbors will be pulled from

/*var locations = {

	"Start": [["A", 6], ["B", 2]],
	"A": ["Finish", 1],
	"B": [["A", 3], ["Finish", 5]],
	"Finish": []

}
*/

var locations = {

	"Start": {
		"A": 6,
		"B": 2
	},
	"A": {
		"Finish": 1
	} ,
	"B": {
		"A": 3,
		"Finish": 5
	} ,
	"Finish": []

}

// Travel time/cost table
// How long it takes to get to a particular node from the start
// We are dealing with three nodes in addition to Start

var travelTimes = {
	"A": 6,
	"B": 2,
	"Finish": Infinity
}

// Parent table

var parents = {
	"A": "Start",
	"B": "Start",
	"Finish": ""
}

var processed = [];

// Find the shortest travel time that has not already been processed

var findShortest = function(underReview) {

	var currentShortest = Infinity;
	var shortestNode = "";

	for(review in underReview){

		var time = underReview[review];

		if(time < currentShortest & !processed.includes(review)){
			currentShortest = time;
			shortestNode = review;
		}
	}
	return shortestNode;
};

// Implementing Dijkstra's algorithm/shortest way to the end now

// (travelTimes, locations, parents)
function quickestPath(tableReview, places, parents) {

	var lookAt = findShortest(tableReview);

	while(lookAt){

		// Finding that node's cost/travel time
		var timeConsideration = tableReview[lookAt];
		
		// Finding that node's neighbors
		
	// will return an object of neighbor properties and values
			var neighbors = places[lookAt];

			console.log("neighbors is: " + JSON.stringify(neighbors));

			for (var prop in neighbors) {

		  //console.log("prop is: " + prop + " and value is: " + neighbors[prop]);
			
			// Cost to get to this node from where we started + the cost to get to the neighbor we're currently reviewing
			var newTime = timeConsideration + neighbors[prop];

			if(tableReview[prop] > newTime){

				tableReview[prop] = newTime;
				parents[prop] = lookAt;
			}
		}

		processed.push(lookAt);
		lookAt = findShortest(tableReview);
		}
		console.log("processed array: " + processed);
		console.log("parents table: " + JSON.stringify(parents));
		console.log("places table: " + JSON.stringify(places));
		console.log("travelTimes table: " + JSON.stringify(tableReview));
		return tableReview[Object.keys(tableReview)[Object.keys(tableReview).length - 1]]
};

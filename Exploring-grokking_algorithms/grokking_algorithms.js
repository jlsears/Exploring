
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

// Graph table: where the neighbors will be pulled from

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

		// If this time is  less than currentShortest and is not in the already processed array
		if(time < currentShortest & !processed.includes(review)){
			currentShortest = time;
			shortestNode = review;
		}
	}
	return shortestNode;
};

// Implementing Dijkstra's algorithm/shortest travel time to the ending point now

// (travelTimes, locations, parents)
function quickestPath(tableReview, places, parents) {

	// Finding the node with the shortest travel time that has not already been reviewed/processed
	var lookAt = findShortest(tableReview);

	while(lookAt){

		// Finding that node's cost/travel time
		var timeConsideration = tableReview[lookAt];
		
		// Finding that node's neighbors
		// will return an object of neighbor properties and values
		var neighbors = places[lookAt];

		// For each of the property names in that object/i.e., the neighbors
		for (var prop in neighbors) {
		
		// Cost to get to this node from where we started + the cost to get to the neighbor we're currently reviewing
		var newTime = timeConsideration + neighbors[prop];

		// If the current travel time stored for those node is greater than the one we've calculated here
		if(tableReview[prop] > newTime){

			// Update the travel time stored for that node to the new one
			tableReview[prop] = newTime;
			// And update the parent recorded for that node in the parents table to the node we're currently reviewing
			parents[prop] = lookAt;
			}
		};

		// Add this node to the array that keeps track of nodes that have already been reviewed
		processed.push(lookAt);
		// Assign next node for review
		lookAt = findShortest(tableReview);
	};

	// Returning the value of the last property in the locations table
	return tableReview[Object.keys(tableReview)[Object.keys(tableReview).length - 1]]
};


// Chapter 8: Greedy Algorithms

var statesNeeded = ["mt", "wa", "or", "id", "nv", "ut"];
var statesLength = statesNeeded.length;

var stations = {

	"kone": ["id", "nv", "ut"],
	"ktwo": ["wa", "id", "mt"],
	"kthree": ["or", "nv", "ca"],
	"kfour": ["nv", "ut"],
	"kfive": ["ca", "az"]
};


function greedyAlg(stationsReviewing, statesNeeded2) {

	var finalStations = [];
	var whileLoopCounter = 0;

	while(statesNeeded.length > 0) {

		whileLoopCounter = whileLoopCounter + 1;
		var bestStation = "";
		var statesCovered = [];
		var forLoopCounter = 0;

		// Looking at the states in the individual station object property

		// LOOPING THROUGH STATIONS	
		for(var st in stationsReviewing) {

			forLoopCounter = forLoopCounter +1;

			var statesWeWant = [];

			// LOOPING THROUGH STATES IN THOSE STATIONS
			for(var actualState in stationsReviewing[st]) {
				
				// If that station has a state we need, push it into the statesWeWant array
				if(statesNeeded2.includes(stationsReviewing[st][actualState]) && !statesCovered.includes(stationsReviewing[st][actualState])){

					statesWeWant.push(stationsReviewing[st][actualState]);
				};
			} // end for loop looking to see if states we want are listed

			// ****DETERMINING BEST STATION****

			// Does this station have more needed states than our current highest count station?
			if(statesWeWant.length > statesCovered.length) {

				// If it does, declare it the new best station
				bestStation = st;
				statesCovered = statesWeWant;
			} // end if comparison
		} // end for loop on stationsReviewing

		// **GO START REVIEWING ANOTHER STATION NOW

		// **ONCE ALL STATIONS HAVE BEEN REVIEWED AND A FINAL BEST STATION SELECTED...

		// Removing our latest selected states from statesNeeded
		for(var remove in statesCovered) {
			
			statesNeeded.splice(statesNeeded.indexOf(statesCovered[remove]),1);
		}

		finalStations = finalStations.concat(bestStation);
		statesLength = statesNeeded2.length;

	} // end while loop

	return finalStations;
} // end function


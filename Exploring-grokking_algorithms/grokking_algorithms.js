
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

var mangoSeller = function(potentialSeller) {
	if(potentialSeller[potentialSeller.length-1] == 'm') {
		return true;
	}
	else { return false;}
}

var breadthFirst = function(searchables) {

	console.log("searchables: " + searchables);
	var searchQueue = [];
	console.log("holdingInfo.searchables: " + holdingInfo[searchables]);
	// searchQueue = searchQueue.push(holdingInfo[searchables]);
	searchQueue = searchQueue.concat(holdingInfo[searchables]);
	var searched = [];
	console.log("searchQueue at beginning: " + searchQueue.toString());

	while(searchQueue) {
		console.log("searchQue again: " + searchQueue.toString());

		var person = searchQueue.shift();

		if(searched.includes(person) == false) {

			console.log("person is: " + person);
			if(mangoSeller(person)){
				console.log(person + " is a mango seller!");
				return true;
			}
			else{
				searchQueue = searchQueue.concat(holdingInfo[person]);
				console.log("have added info to searchQue: " + holdingInfo[person]);
				console.log("and searchQueue is now: " + searchQueue.toString());
			}
		}
	}
	console.log("No mango sellers to be found");
	return false;
}


// A space for trying out algorithms as examined in the book "Grokking Algorithms," by Aditya Bhargava
// https://www.manning.com/books/grokking-algorithms

// Chapter 3: Recursion

// Remember to think "turtles almost all the way up" in this case

var startHere = 5;

var tryRecursion = function(x) {
	if(x == 1) {
		return x;
	} else {
		console.log("Recursing here: " + x);
		return x * tryRecursion(x-1);
	}
};

var goRecursion = tryRecursion(startHere);


// Chapter 4: Quicksort


var handyArray = [8, 48, 6, 9, 24, 32, 3, 4];

var counter = 0;

var quicklyNow = function(sortThis) {

	counter = counter + 1;

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
		return nextArray = quicklyNow(less).concat(findPivot, quicklyNow(greater));
	}
}

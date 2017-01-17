
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

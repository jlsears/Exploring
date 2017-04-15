
// A space for trying out algorithms as examined in the book "Grokking Algorithms," by Aditya Bhargava
// https://www.manning.com/books/grokking-algorithms

//********************************************************************************************

// Chapter 3: Recursion

//********************************************************************************************


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


//********************************************************************************************

// Chapter 6: Breadth-First Search

//********************************************************************************************


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


//********************************************************************************************

// Chapter 7: Dijkstra's Algorithm

//********************************************************************************************


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


//********************************************************************************************

// Chapter 8: Greedy Algorithms

//********************************************************************************************


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


//********************************************************************************************

// Chapter 9: Dynamic Programming

//********************************************************************************************

//************************************************************
// Knapsack problem
//************************************************************

// Grid to hold the results of evaluation of each object/value/weight
// the item/value combination in the last space in the grid will be our answers


var currentObjects = [["guitar", 1, 1500], ["stereo", 4, 3000], ["laptop", 3, 2000]];


// first arg: currentObjects... sec arg: the number weight of the bag
function dynamicAlg(objectsSelect, knapsackWeight){

	// Basic measurements
  var knapsackSize = knapsackWeight; // columns for 1 through this number
  var numberObjects = currentObjects.length;

  // dimensions will hold 
  var gridArray = new Array();
  var lastSquare = 0;
  var otherComparison;

  // instantiating multidimensional array
  for(var k = 0; k < numberObjects; k++){
  	gridArray[k] = [];
  }

  // to iterate through each object
  for(var i = 0; i < currentObjects.length; i++){

    // to iterate through each knapsacksize for the object under review
    for(var j = 1; j <= knapsackSize; j++){

      // the sussOutMax function will need to return the new object/value combo that will become the latest
      // element added to the multidimensional array gridArray

      function sussOutMax(prev, currentItem){

        // var to hold sum calculating below and corresponding object names
        var findObj;
        var findValue;
        var resultCalculation;
        var lastRow = i-1;
        // current knapsack size minus the size of the item currently under evaluation
        var neededColumn = j - currentItem[1];
        // positive or negative value will indicate whether such a column actually exists
        var isNegative = neededColumn.toString().includes("-");
        var tempLastSquare;
        var totalSize;

        // if we're on the first row/object
        if(i == 0) {
        	return lastSquare;
        }

        // For any evaluations occurring beyond the first row
        // need to evaluate value of current item + whatever can be filled into the remaining space
        // if there is an acceptable filler square... get value of that filler square

        // if the current item's size is too big for the current knapsack size
        else if(currentItem[1] > j){

        	// return the value of this column/knapsack size for the previous row
        	tempLastSquare = [gridArray[i-1][j][0] ,gridArray[i-1][j][1]];
        	return tempLastSquare;
        }

        // evaluation needing to occur if the current item's size is not too big for the current knapsack size
        else{

        	// capture current item's name and value
        	tempLastSquare = [currentItem[0], currentItem[2]];

        	// is there a grid square we can look to in order to add an additional item/value to this knapsack?
        	if(j > 1 && !isNegative) {

	          // combine the current item name and that other square's item name
	          findObj = currentItem[0] + ", " + gridArray[lastRow][neededColumn][0];
	          // combine the current item value and that other square's item value 
	          findValue = Number(currentItem[2]) + Number([gridArray[i-1][j - currentItem[1]][1]]);
	          // capture the above information together here
	          resultCalculation = [findObj, findValue];
	          // capture the total size of both of those items        
	          totalSize = currentItem[1] + (j-currentItem[1]);

		        // need to compare value from new evaluation to value of prior max... the largest will determine what is returned
		        if(findValue > gridArray[i-1][j-currentItem[1]][1] && currentItem[1] < j ){
		          lastSquare = resultCalculation;
		          return lastSquare;
		        } else{
		        	lastSquare = tempLastSquare;
		          return lastSquare;
		        }
        } // end if
        // if the above criteria for evaluation is not met, return the name and value of the current item under evaluation
        return tempLastSquare;
        } // end of else if checking for basic fit and increased value
       } // ***************end sussOutMax function***************

      // and for that object, iterate through each knapsack size, storing the result of the evaluation
      // in the corresponding grid space

      // getting the first square in gridArray setup
      if(i == 0 && j == 1){
        gridArray[i][j-1] = [currentObjects[i][0], currentObjects[i][2]];
        lastSquare = [currentObjects[i][0], currentObjects[i][2]];

      // evaluations for all other subsequent comparisons here
      } else{

        gridArray[i][j-1] = sussOutMax(lastSquare, currentObjects[i]);

      } // end else statement
    } // end second for loop
   }// end first for loop

  return lastSquare;
}


//************************************************************
// Longest common substring problem
//************************************************************

// entering as arguments: word/search term initially entered, words to evaluate for longest substring/likeness
var wordTypedIn = "hish";
var wordsEvaluate = ["vista", "fish"];

function substringProblem(wordEntered, wordsCompare){

	// variable for word comparison array
	var comparisonList = new Array();

	// create multidimensional array to hold a) word, and b) max value for each word up for comparison
	var reviewingTotals = new Array();

	// ****************************************************
	// *******************EACH WORD IN ARRAY***************
	// ****************************************************

	// for loop to iterate through each word passed in as words for comparison array argument (k)

	for(var k = 0; k < wordsCompare.length; k++){		

		// current word in the array that we're looking at for comparison
		var currentWordEvaluate = wordsCompare[k];

		// variable for "top" word/comparison word
		// Will update this after have looped to find the max letter/number pair at the end
		var topSubstring;

		// make a multidimensional array to perform as the comparison grid
		var comparisonGrid = new Array();

		// instantiate each row in this array: one row per letter in wordEntered
		for(var a = 0; a < wordEntered.length; a++){
			comparisonGrid[a] = [];
		}

		// ****************************************************
		// *******************MAIN ITERATION*******************
		// ****************************************************

		// for each letter in wordEntered (i)
		for(var i = 0; i < wordEntered.length; i++){

			// iterate through each of the letters in the word up for evaluation (j)
			for(var j = 0; j < currentWordEvaluate.length; j++){

				// A) if it's the first row
				if(i == 0){

					// if the two letters match, set value of cell equal to 1
					if(wordEntered[i] == currentWordEvaluate[j]){
						comparisonGrid[i][j] = 1;
					}

					else{
						// otherwise, set value of cell to 0
						comparisonGrid[i][j] = 0;
					}
				} // end if i == 0

				// B) all other rows
				else{

					// a) if we're looking at the first column
					if(j == 0){

						// if the two letters match, set value of cell equal to 1
						if(wordEntered[i] == currentWordEvaluate[j]){
								comparisonGrid[i][j] = 1;
						}

						else{
							// otherwise, set value of cell to 0
							comparisonGrid[i][j] = 0;
						}

					} // end if j = 0

					// b) all other columns
					else{					
						// if the two letters match
						if(wordEntered[i] == currentWordEvaluate[j]){
							// set value of cell equal to value of top left neighbor
							comparisonGrid[i][j] = comparisonGrid[i-1][j-1] + 1;
						}

						else{
							// otherwise, set value of cell to 0
							comparisonGrid[i][j] = 0;
						}
					}
				}// end else
			} // end for loop j
		} // end for loop i

		// after looping through the words being compared in their entirety, find value of largest/max cell
		// save this word and max value in the multidimensional array created for holding totals
		var getMax = Array.prototype.concat.apply([], comparisonGrid).sort().pop();
		reviewingTotals[k] = [wordsCompare[k], getMax];

		// clear out comparisonGrid
		for(var a = 0; a < wordEntered.length; a++){
			comparisonGrid[a] = [];
		}
		// time to move onto the next word to evaluate
	} // end for loop k

		// once all the words have been looped through, find the max value out of all words evaluated
		topSubstring = reviewingTotals.sort(function (c, d){ return d[1] - c[1]; })[0][0];

		// and return the corresponding word
		return topSubstring;
}


//************************************************************
// Longest common subsequence problem
//************************************************************

// entering as arguments: word/search term initially entered, words to evaluate for longest substring/likeness
var searchTerm = "short";
var wordsReviewing = ["fort", "fish"];

function subsequenceProblem(wordEntered, wordsCompare){

	// variable for word comparison array
	var comparisonList = new Array();

	// create multidimensional array to hold a) word, and b) max value for each word up for comparison
	var reviewingTotals = new Array();

	// ****************************************************
	// *******************EACH WORD IN ARRAY***************
	// ****************************************************

	// for loop to iterate through each word passed in as words for comparison array argument (k)

	for(var k = 0; k < wordsCompare.length; k++){		

		// current word in the array that we're looking at for comparison
		var currentWordEvaluate = wordsCompare[k];

		// variable for "top" word/comparison word
		// Will update this after have looped to find the max letter/number pair at the end
		var topSubstring;

		// make a multidimensional array to perform as the comparison grid
		var comparisonGrid = new Array();

		// instantiate each row in this array: one row per letter in wordEntered
		for(var a = 0; a < wordEntered.length; a++){
			comparisonGrid[a] = [];
		}

		// ****************************************************
		// *******************MAIN ITERATION*******************
		// ****************************************************

		// for each letter in wordEntered (i)
		for(var i = 0; i < wordEntered.length; i++){

			// iterate through each of the letters in the word up for evaluation (j)
			for(var j = 0; j < currentWordEvaluate.length; j++){

				// A) if it's the first row
				if(i == 0){

					// if the two letters match, set value of cell equal to 1
					if(wordEntered[i] == currentWordEvaluate[j]){
						comparisonGrid[i][j] = 1;
					}

					// if they don't match and it's also the first column
					else if(j == 0){
						comparisonGrid[i][j] = 0;
					}

					else{
						// otherwise, set value of cell to 0
						//comparisonGrid[i][j] = 0;
						comparisonGrid[i][j] = Math.max(comparisonGrid[i][j-1], 0);
					}
				} // end if i == 0

				// B) all other rows
				else{

					// a) if we're looking at the first column
					if(j == 0){

						// if the two letters match, set value of cell equal to above neighbor + 1
						if(wordEntered[i] == currentWordEvaluate[j]){
								// value would theoretically be set to the value of the upper lefthand neighbor + 1...
								// so need a workaround...
								comparisonGrid[i][j] = comparisonGrid[i-1][j] + 1;
						}

						else{
							// otherwise, set value of cell to above neighbor
							comparisonGrid[i][j] = comparisonGrid[i-1][j];
						}

					} // end if j = 0

					// b) all other columns
					else{					
						// if the two letters match
						if(wordEntered[i] == currentWordEvaluate[j]){
							// set value of cell equal to value of the upper lefthand neighbor +1
							comparisonGrid[i][j] = comparisonGrid[i-1][j-1] + 1;
						}

						else{
							// otherwise, set value of cell to max of upper or lefthand neighbor
							comparisonGrid[i][j] = Math.max(comparisonGrid[i][j-1], comparisonGrid[i-1][j]);
						}
					}
				}// end else
			} // end for loop j
		} // end for loop i

		// after looping through the words being compared in their entirety, find value of largest/max cell
		// save this word and max value in the multidimensional array created for holding totals
		var getMax = Array.prototype.concat.apply([], comparisonGrid).sort().pop();
		reviewingTotals[k] = [wordsCompare[k], getMax];

		// clear out comparisonGrid
		for(var a = 0; a < wordEntered.length; a++){
			comparisonGrid[a] = [];
		}
		// time to move onto the next word to evaluate
	} // end for loop k

		// once all the words have been looped through, find the max value out of all words evaluated
		topSubstring = reviewingTotals.sort(function (c, d){ return d[1] - c[1]; })[0][0];

		// and return the corresponding word
		return topSubstring;
}


//********************************************************************************************

// Chapter 10: K-Nearest Neighbors

//********************************************************************************************

//************************************************************
// Classifying oranges vs grapefruit
//************************************************************

// Object for fruit

var manyFruit = {

  1: { type: "orange", size: 1, redness: 1 },  
  2: { type: "orange", size: 2, redness: 2 },  
  3: { type: "grapefruit", size: 6, redness: 5 },  
  4: { type: "orange", size: 4, redness: 3 },  
  5: { type: "orange", size: 4, redness: 4 },  
  6: { type: "grapefruit", size: 7, redness: 5 },  
  7: { type: "grapefruit", size: 7, redness: 6 },  
  8: { type: "grapefruit", size: 9, redness: 6 },  
  9: { type: "grapefruit", size: 8, redness: 7 },  
  10: { type: "grapefruit", size: 7, redness: 8 }  

};

var mysteryFruit = { type: "", size: 5, redness: 4 };

// evaluation function which takes two arguments: object of current fruit info, fruit being evaluated
var nearestNeighbor = function(currentList, evaluating) {

  var distanceArray = new Array();

  for(listy in currentList){

    // (size - size) squared + (redness - redness) squared
    // then find the square root of that number -- that is the distance
    var findingDistance = Math.round(Math.sqrt(Math.pow(currentList[listy].size - evaluating["size"], 2) + Math.pow(currentList[listy].redness - evaluating["redness"], 2)));
        
    // output will be saved into a multidimensional array containing: type, distance
    distanceArray.push([currentList[listy].type , findingDistance]);
  } // end for loop

  // sorting the elements in multidimensional distanceArray
  var findingThreeMax = distanceArray.sort(function (c, d){ return c[1] - d[1]; });

  // capturing the three lowest/shortest distances and their corresponding types from findingThreeMax
  var threeMax = [findingThreeMax[0][0], findingThreeMax[1][0], findingThreeMax[2][0]];

  var orangeCounter = 0;
  var grapefruitCounter = 0;

  // determining which type appears the most in threeMax
  for(var j = 0; j < threeMax.length; j++){
    threeMax[j] == 'orange' ? orangeCounter = orangeCounter + 1 : grapefruitCounter = grapefruitCounter + 1;
  } // end for loop

  return grapefruitCounter < orangeCounter ? "grapefruit" : "orange";
}


//************************************************************
// Regression and predicting movie taste
//************************************************************

var fellowFilmLovers = {

	"Harry": { comedy: 5, action: 5, drama: 1, horror: 2, romance: 1 },
	"Hermionie": { comedy: 5, action: 5, drama: 3, horror: 2, romance: 4 },
	"Ron": { comedy: 4, action: 1, drama: 4, horror: 2, romance: 3 },
	"Ginny": { comedy: 2, action: 3, drama: 5, horror: 2, romance: 3 },
	"Neville": { comedy: 1, action: 3, drama: 4, horror: 3, romance: 2 },
	"Luna": { comedy: 1, action: 5, drama: 4, horror: 2, romance: 5 },
	"Dobby": { comedy: 3, action: 1, drama: 2, horror: 4, romance: 5 },
	"Hedwig": { comedy: 1, action: 4, drama: 4, horror: 4, romance: 5 },
	"Malfoy": { comedy: 4, action: 4, drama: 5, horror: 1, romance: 5 },
	"Dudley": { comedy: 5, action: 3, drama: 3, horror: 3, romance: 1 }

};

var movieWatcher = { comedy: 2, action: 2, drama: 3, horror: 3, romance: 5 };

var fiveNearest = function(neighborList, person) {

	var calculatedDistances = new Array();

	for(rating in neighborList){

		var getDistances = Math.round(

			Math.sqrt(Math.pow(neighborList[rating].comedy - person["comedy"], 2)
			+ Math.pow(neighborList[rating].action - person["action"], 2)
			+ Math.pow(neighborList[rating].drama - person["drama"], 2)
			+ Math.pow(neighborList[rating].horror - person["horror"], 2)
			+ Math.pow(neighborList[rating].romance - person["romance"], 2)
			)
		); // end getDistance

		calculatedDistances.push([rating, getDistances]);
	} // end for

	// sorting the elements in calculatedDistances
	var findingFiveMax = calculatedDistances.sort(function (c, d){ return c[1] - d[1]; });

	var fiveMax = [findingFiveMax[0][0], findingFiveMax[1][0], findingFiveMax[2][0], findingFiveMax[3][0], findingFiveMax[4][0]];

	return fiveMax;
} // end fiveNearest function

	var particularMovie = {

	"Harry": 5,
	"Hermionie": 4,
	"Ron": 4,
	"Ginny": 5,
	"Neville": 3,
	"Luna": 5,
	"Dobby": 4,
	"Hedwig": 4,
	"Malfoy": 5,
	"Dudley": 3

};

	// movieWatcher, particularMovie, fellowFilmLovers
	regressionResult = function(onePerson, moviePredicting, assortedWatchers){

		var individualFive = fiveNearest(assortedWatchers, onePerson);

		var ratingsArray = [];

		for(indiv in individualFive){

			ratingsArray.push(moviePredicting[individualFive[indiv]]);
		};

		var sumRegression = ratingsArray.reduce(function(acc, val){

			return acc + val;
		}, 0);

		return sumRegression/5;
	};


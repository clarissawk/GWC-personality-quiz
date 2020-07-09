//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome

var questioncount = 0;
var baguettecount = 0;
var focacciacount = 0;
var pancount = 0;
var sourdoughcount = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", baguette);
q1a2.addEventListener("click", focaccia);
q1a3.addEventListener("click", pan);
q1a4.addEventListener("click", sourdough);

//#TODO: Define quiz functions here

function baguette() {
  baguettecount = baguettecount + 1; //# Track # of baguette answers
  questioncount = questioncount + 1; //# Track # quiz answers
}

function focaccia() {
  focacciacount = focacciacount + 1;
  questioncount = questioncount + 1;
}

function pan() {
  pancount = pancount + 1;
  questioncount = questioncount + 1;
}

function sourdough() {
  sourdoughcount = sourdoughcount + 1;
  questioncount = questioncount + 1;
}

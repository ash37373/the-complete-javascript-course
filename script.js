//Lecture : variables
/*
여러줄 주석
var name = 'sunghwan';
console.log(name);

var lastName = 'Ahn';
console.log(lastName);

var age = 33;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//data type
// 1 number
// 2 string
// 3 boolean : logical data type that can only be true or false
// 4 undefined : data type of a variable which does not have a value yet.
// 5 null : also means 'non-existent'

// Lecture : variables 2
/*
var name = 'sunghwan';
var age = 33;

//console.log(name+age);
//console.log(age+age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + 'is a '+age+' years old '+job+'. Is he married? '+isMarried+' .');

age = 'thirty six';
job = 'driver';

console.log(name + 'is a '+age+' years old '+job+'. Is he married? '+isMarried+' .');

var lastName = prompt('What is the lastname?');
console.log(lastName);

alert(name + 'is a '+age+' years old '+job+'. Is he married? '+isMarried+' .');
*/

//Lecture : Operators
/*
var now = 2018;
var birthYear = now - 33;

birthYear = now - 33 * 2;
// 2018 - 66
// 1952

console.log(birthYear);

var ageJone = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;

ageJohn++;
//ageJohn = ageJohn+1;
console.log(ageJohn);
console.log(ageMark);
*/

////////////////////////////////////////////////////////////////
//Lecture : if/else statements
/*
var name = "sunghwan";
var age = 33;
var isMarried = "no";

if (isMarried === "yes") {
  console.log(name + "is married!");
} else {
  console.log(name + " will hopefulley marry soon :)");
}

isMarried = false;
if (isMarried) {
  console.log("YES!");
} else {
  console.log("NO!");
}

if (23 == "23") {
  console.log("something to print...");
}

if (23 === "23") {
  console.log("something to print..."); //===은 타입도 비교함.
}
*/

///////////////////////////////////////////////////////////////////////
//Lecture : boolean logic and switch
//AND(&&) => true if ALL are true
//OR(||) => true if One is true
//NOT(!) => inverts true/false value
/*
var age = 20;
if (age <= 19) {
  console.log("hwan is a teenager");
} else if (age >= 20 && age < 30) {
  console.log("hwan is a young man");
} else {
  console.log("hwan is a man");
}

var job = "teacher";

job = prompt("What does hwan do?");

switch (job) {
  case "teacher":
    console.log("hwan teaches kids.");
    break;
  case "driver":
    console.log("hwan drives a cab in lisbon.");
    break;
  case "cop":
    console.log("hwan helps fight crime.");
    break;
  default:
    console.log("hwan does something else.");
}
*/

////////////////////////////////////////////////////////////////////////
//coding challenge 1.
var heightHwan = 172;
var heightMike = 165;
var ageHwan = 33;
var ageMike = 29;

var scoreHwan = heightHwan + 5 * ageHwan;
var scoreMike = heightMike + 5 * ageMike;

/*
if (scoreHwan > scoreMike) {
  console.log("Hwan wins the game with " + scoreHwan + " points!");
} else if (scoreMike > scoreHwan) {
  console.log("Mike wins the game with " + scoreMike + " points!");
} else if (scoreMike === scoreMike) {
  console.log("THerer is a draw.");
}
*/

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreHwan > scoreMike && scoreHwan > scoreMary) {
  console.log("Hwan wins!");
}

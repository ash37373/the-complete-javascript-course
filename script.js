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

var age = 25;
if (age <= 19) {
  console.log("hwan is a teenager");
} else {
  console.log("hwan is a man");
}

//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 15;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 259.67;

//create a variable to hold a person's middle initial
var middleInitial = "S";

//create a variable to hold true if it's hot outside and false if it's cold outside
var itsHotOutside = true; 
var itsColdOutside = false;

//create a variable to hold a customer's first name

var firstName = "Fionna";


//create a variable to hold a street address

var streetAddress = "53 colonels drive";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(itsColdOutside);
console.log(itsHotOutside);
console.log(firstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable

availablePlaneSeats = availablePlaneSeats - 2;

//impulse candy bar purchase, add 2.15 to the grocery total

costOfGroceries = costOfGroceries + 2.15;



//birth certificate was printed incorrectly, change the middle initial to something else

middleInitial = "J";

//the season has changed, update the hot outside variable to be opposite of what it was
itsHotOutside = false

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = firstName + " " + middleInitial + " Williams";

//print a line to the console that introduces the customer and says they live at the address variable

console.log ("Hi, my name is " + fullName + " I live at " + streetAddress)
// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 65
var mySpeed = 25

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"

if (mySpeed > speedLimit){
    console.log("Slow Down! Mom is mad!");
} else if(mySpeed === speedLimit){
    console.log("Everyone is happy!");
} else {
    console.log("Speed up! Dad is mad");
}

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = true;
var openDoor = false;



// using a conditional, determine if alarm is set. 
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.

if (alarmSet && openDoor){
    console.log("Sound Alarm");
} else {
    console.log("Everything is fine!");
}


// create two variables, username and password
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
// otherwise, print "Admin Access Denied"

var username = "Tommy123"
var password = "23456"

if ((username === "Tommy123" && password === "12345")|| (username === "Tommy456" && password === "6789")){
    console.log("Admin Login Successful");
}else{
    console.log("Admin Access Denied")
}


// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle


var studentGrade = "K";
var studentClass;

switch(studentGrade){
    case "K":
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break; 
//Anything other than their values will return "Error" to the console.
    default:
        console.log("Error")
}
//to test it out
console.log(studentClass);




// write a for loop that will iterate backwards from 10 to -10
for(var i = 10; i>= -10; i--){
    console.log(i);
}


// write a do/while loop that prints 1 through 50
var iterator = 1;
do {
console.log(iterator++)
} while(iterator <= 50);

// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4
var iterator = 1;
do {
console.log(iterator % 4);
    iterator++;
} while(iterator <= 50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
 
    for(let i = 1; i < 10; i++){
        console.log(i)
    }

    for(let i = 11; i < 100; i++){
        console.log(i)
    }

    for(let i = 110; i > 10; i--){
        console.log(i)
    }



//openclass practice
 
 var num1 = parseInt(input[0]);
 var num2 = parseInt(input[1]);
 var num3 = parseInt(input[2]);
 var num4 = parseInt(input[3]);
 
if (num1 >= num2){
    if (num3 >= num4){
        console.log ("Both statements are true.");
    }else if (num3 <= num4){
        console.log("The first statement is true, but the second is not.")
    }
}console.log ("Program ended.")
    

//function to print odd numbers

num = 7
function printOdd(num){
    for (let i=1; i<num; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
     

//fucntion to print even numbers

num = 20
function printEven(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }

//How to create a for/while loop for a list of numbers
countdown = 10
if (countdown <= 10 && countdown >= 3) {
    while (countdown >= 1) {
        console.log(countdown + "...");
        countdown--;
    }
}

console.log("We have lift off!");

//while statement that adds 1 cup of rice for each increment

/*var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

var requiredCupsOfRice = parseInt(input[0]);
var currentCupsOfRice = 0;*/
 
//This is just one example using a while loop

while(currentCupsOfRice != requiredCupsOfRice){
    //while the current cups of rice do not equal the required cups of rice
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}// "the bowl contains" + (++currentCupsOfRice)
console.log('We have enough rice!');





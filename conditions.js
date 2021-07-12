//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let var1 = 4;
let var2 = 4;
let var3 = 15;
if ((var1 >= 50 && var1 <= 99) && (var2 >= 50 && var2 <= 99)) {

    console.log(true);
} else {
    console.log(false);
}

//2.Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
if ((var1 >= 50 && var1 <= 99) || (var2 >= 50 && var2 <= 99) || (var3 >= 50 && var3 <= 99)) {
    console.log(true);
} else {
    console.log(false);
}

//3. Declare the variables a, b and c, and give them number values. 
//Check which one out of the three variables has the largest value and print 
//it to the console. Then change the values of the variables to see 
//if your conditional still works.

if (var1 > var2 && var1 > var3) {
    console.log(`${var1} is the largest number`);
} else if (var2 > var3 && var2 > var1) {
    console.log(`${var2} is the largest number`);
} else if (var3 > var2 && var3 > var1) {
    console.log(`${var3} is the largest number`);
} else {
    console.log(`numbers are equal`);
}

/*4. Create a new string adding "Py" in front of a given string.
 If the given string begins with "Py" then print the original string.
*/

let str = "hton";
let givenStr = "Py".concat(str);
console.log(givenStr);
if (givenStr.startsWith("Py")) {
    console.log(`Original string is ${str}`);

} else {
    console.log(`Given string doesn't start with str`);
}
//5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sum = var1 + var2;
if (sum >= 50 && sum <= 80) {
    console.log(65);
} else {
    console.log(80)
}

//6Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
if (sum == 8 || (var1 - var2 == 8)) {
    console.log(true);
} else {
    console.log(false);
}

//7.heck whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
if (var1 == 15 || var2 == 15 || (sum == 15)) {
    console.log(true);

} else {
    console.log(false);
}

//8 Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if (var1 % 7 == 0 || var1 % 11 == 0 || var2 % 7 == 0 || var2 % 11 == 0) {
    console.log(true);
} else {
    console.log(false);
}

//9 Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

if (var1 == var2) {
    sum *= 3;

}
console.log(sum);

//10 Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let difference = var3 - 19;
if (var3 > 19) {
    console.log(difference *= 2);
} else {
    console.log(`specified number is not greater than 19`);
}

/*11. BONUS CHALLENGE:Make a variable for firstName and age and give each variable 
values. Create an if/else statement to check whether the person's age is less than 
13. If so, print "firstName is a child". If the age is equal to or more than 13 and 
less than 20, print "firstName is a teenager". If the person's age is equal to and
 more than 20 and less than 30, then print "firstName is a young adult". If none of 
these conditions apply, print "firstName is a adult".
 */

let firstName = "Adem";
let age = 39;
if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is a adult`);
}


//13. 
let heightOfMark = 1.65;
let massOfMark = 75;

let heightOfJohn = 1.90;
let massOfJOhn = 90;

let BMIMark = Math.round(massOfMark / (heightOfMark ** 2));
let BMIJohn = Math.round(massOfJOhn / (heightOfJohn ** 2));

let bool = BMIMark > BMIJohn;
if (bool) {
    console.log(`Is Mark's BMI  higher than JOhn? It is ${bool}. Mark's BMI is: ${BMIMark} and John BMI is: ${BMIJohn} `)
} else {
    console.log(`Is Mark's BMI  higher than JOhn? It is ${bool}. Mark's BMI is: ${BMIMark} and John BMI is: ${BMIJohn} `);

}
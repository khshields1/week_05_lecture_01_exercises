var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname;

console.log(fullName);

/* Line 1 errors - semicolon is not needed and the quotes should be single quotes
Line 2 errors - semicolon is not needed and the quotes should be single quotes
Line 3 errors - semicolon is not needed, there should be a space added after firstName and the lastname variable should be camel case
Line 5 errors - semicolon is not needed */

//Corrected code should be:

var firstName = 'Julia'
var lastName = 'Roberts'
var fullName = firstName + '' + lastName

console.log(fullName)

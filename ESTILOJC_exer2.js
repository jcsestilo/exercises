/**
NAME: Jan Coleen S. Estilo
CMSC 100 Exer 2
 */

// ITEM 1
// Function for checking if pass has numbers
function containsNum(password){
    let pass = String(password);

    for(let i=0; i<pass.length; i++){ // Loop through the whole string
        if(!isNaN(pass.charAt(i)) && !(pass.charAt(i) === " ")){ // If the character is NOT not a number, and not a space
            return true;
        }
    }
    return false;
}

// Function for checking if pass has uppercase
function containsUpper(password){
    let pass = String(password); // Put the input to a variable
    
    for(let i=0; i<pass.length; i++){ // Loop through the whole string
        let ch = pass.charAt(i);

        if(ch === ch.toUpperCase() && (isNaN(ch) && !(ch === " "))){ // If the character is equal to its uppercase counterpart and not a number or " "
            return true;
        }
    }

    return false;
}

// Function for checking if pass has lowercase
function containsLower(password){
    let pass = String(password);

    for(let i=0; i<pass.length; i++){ // Loop through the whole string
        let ch = pass.charAt(i);
        if(ch === ch.toLowerCase() && (isNaN(ch) && !(ch === " "))){ // If the character is equal to its lowercase counterpart and not a number or " "
            return true;
        }
    }

    return false;
}

// Function for validating two passwords
function validatePassword(input1, input2){
    let pass1 = String(input1);
    let pass2 = String(input2);

    let match = (pass1 == pass2); // Boolean value for checking if the two strings match

    if (match){ // If in the first place, the 2 passwords don't match, skip this block
        let size = (pass1.length >= 8); // Boolean value for checking if length >= 8

        if (size && (containsNum(pass1) && (containsUpper(pass1) && containsLower(pass1)))) {
            return true;
        }
    }
    return false;
}

console.log(validatePassword("helloworld", "hello")); // returns false
console.log(validatePassword("hello", "hello")); // returns false
console.log(validatePassword("hello1234", "hello1234")); // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234")); // returns false

// ITEM 2
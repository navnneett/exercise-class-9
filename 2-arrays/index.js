/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * Initialise the variable called food supplies to values: milk, bread, butter.
 * Then initialise a variable called food supplies two to the values apple, mango.
 * Then concatenate the two arrays with the food supplies first then the food supplies two.
 */
var foodSupplies = ["milk", "bread", "butter"];
var foodSuppliesTwo = ["apple", "mango"];

console.log(foodSupplies.concat(foodSuppliesTwo)); //[ 'milk', 'bread', 'butter', 'apple', 'mango' ]




/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * Initialise the variable `shopping` to a 2-Dimensional array containing the values below:
 * 
 *          column[0]   column[1]     column[2]       column[3]
 * Row 1    Item 1      Shirt         10 dollars      blue
 * Row 2    Item 2      Pant          20 dollars      black
 * 
 * then use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * I am wearing _Item 2_, _Pant_ that is worth _20 dollars_ and is the colour _black_.
 *  
 */

var shopping = [
    ["Item 1", "Shirt", "10 dollars", "blue"],
    ["Item 2", "Pant", "20 dollars", "black"]
]

console.table(shopping);

var sentenceOne = `I am wearing ${shopping[1][0]}, ${shopping[1][1]} that is worth ${shopping[1][2]}.`;
var sentenceTwo = ` The colour of the pant is ${shopping[1][3]}.`;

console.log(sentenceOne.concat(sentenceTwo));
// I am wearing Item 2, Pant that is worth 20 dollars. The colour of the pant is black.

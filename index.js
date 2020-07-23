/**

    We will push to github all along the way so we track our week and keep a log

    a) code in git, start working. first step: `git checkout -b answer`

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */
 // let and const could both be ok to use if we are not sure yet if our code will make changes
 // Using `const` makes sure we don't change data of a var we don't expect will change
 // We can always change a `const` to a `let` if we our rules change to allow mutations to a variables value
 

 /**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function

    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */
const { assignments } = require('./data/assignments')

/**

    Looping and using references to arrays a given position
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */


// option 1 - has a lot of syntax
for (let index = 0; index < assignments.length; index = index + 1) {
    // use the singular name of the array
    // square brackets are used to "positionally" access array items
    const assignment = assignments[index]
    //console.log({ assignment })
}

// option 2 - has less syntax
// using a for-in with an array gives us access to the index number value only ad we still need to get the array item at the index position
for (let index in assignments) {
    const assignment = assignments[index]
    //console.log(index, assignment )
}

// option 3 - has the least syntax but the highest complexity for new coders to comprehend due to a function being used as the parameter with forEach/
// If you are working on a challenge and `forEach` is not working but you can get another loop to work, that is perfectly ok as long as `forEach` has not somehow been made a code requirement such as in a specific interview or coding challenge
assignments.forEach( (assignment) => { 
    console.log({ assignment })
} )


/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */
// option a - using a form in loop
let allAssignments = []
for (const index in assignments) {
    const assignment = assignments[index]
    allAssignments.push(assignment)
    // Note that `allAssignments.push(assignment)` could be written as:
    // `allAssignments[index] = assignment`
}
// console.log({ allAssignments })

// option b - less syntax to solve the same challenge - using a `forEach` loop
// reassign an empty array to start the next variation 
allAssignments = []

assignments.forEach( (assignment) => {
    // push this item onto the allAssignments
    allAssignments.push(assignment)
} )

// option b - using the `map` for the least amount of syntax to solve the challenge
allAssignments = assignments.map( assignment => {
    return assignment
} )


/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `completedAssignments` where there are property values with `completed` of `true`

 */

// option 1 - using a for-in loop
let completedAssignments = []
for (const index in assignments) {
    const assignment = assignments[index]

    if (assignment.completed) {
        // assignment is completed so we can put it into our new "filter" array
        completedAssignments.push(assignment)
    }
}

console.log({completedAssignments})

// option 2 - using the `filter` method of the Array
completedAssignments = assignments.filter( (assignment) => {
    // optional use of object property destructuring
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let { completed } = assignment
    console.log(completed)
    // Array `filter` methods are always expected to return a predicate which is used to include or exclude an array item from the new "filtered" version of the original array 
    // `completed` is a property with a boolean value so we can use it as our return for our predicate
    return completed
} )

console.log( { completedAssignments } )



/**

    We will push to github all along the way so we track our week and keep a log

a) code in git, start working. first step: 'git checkout - b answer'

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. 
    Name the array `assignments`.  `completed` will have boolean values.

 */

// let and const could both be ok here if we are not sure yet about changes
// 'const' makes sure you don't change a var you don't expet to


/**

   Referencing code in other files
 
   2a)  Great work! Now move that array initialization out into its own file. 
       See ./data/assignments.js where you will initialize the data in place of inline in this function

   2b) "Import" that data into this file in place of the inline code you had in step 1
   

 */
const { assignments } = require('./data/assignments')
console.log(assignments)

/**

    Looping and using references to arrays a given positions

    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */
/*
function arrayLoop(assignments) {
    assignments.forEach((assignment) => {
        console.log({ assignment })
    })
}

arrayLoop(assignments)

// alternative methods below as demonstrated by JR:
// for-in method to access a specific index number value only
arrayLoopAlt = (data) => {
    for (let index in assignments) {
        const assignment = assignments[index]
        console.log(index, assignment)
    }
}
arrayLoopAlt(assignments)
// for loop
for (let index = 0; index < assignments.length; index = index + 1) {
    // use the singular name of the arary
    // square brackets are used to "positionally" access array items
    const assignment = assignments[index]
    console.log({ assignment })
}
*/
/**

    Looping and Assignment

    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and 
    assign each item from `assignments` to the new `allAssignments` array

 */
/* function relocateAssignments(assignments) {
    let allAssignments = []
    assignments.forEach(assignment => {
        allAssignments.push(assignment)
    })
    return allAssignments
}

relocateAssignments(assignments)

let allAssignments = []
for (const index in assignments) {
    const assignment = assignments[index]
    allAssignments.push(assignment)
}
console.log({ allAssignments }) */

let allAssignments = assignments.map((assignment) => {
    return assignment
})

console.log(allAssignments)

/**

    Filtering

    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.
    Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */



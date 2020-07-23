/**

    We will push to github all along the way so we track our week and keep a log

    a) code in git, start working. First Step: 'git checkout -b answer'
    b) 

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */


 /**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function

    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */

const assignmentsImport = require('./data/assignments.js')

// destructuring
/**

    Looping and using references to arrays a given positions
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */
//for loop with a lot of flexibility
/*     for (let index=0; index < assignments.length; index - 1) {
        const assignment = assignments[index]
        console.log({assignment})
    }
// also flexible
    for (let index in assignments.splice(2, 2)) {
        const assignment = assignments[index]
        console.log(index, assignment)
    }

    //map function
    let allAssignments = assignments.map( (assignment) => { 
        return assignment
    } )

console.log(allAssignments) */
/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */


/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */



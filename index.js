      

/**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function

    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */

const  {assignments}  = require ('./data/assignments')
console.log(assignments)


/**

    Looping and using references to arrays a given positions
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */
for (let index = 0; index < assignments.length; index = index + 1)
const assignment = assignments [index]
console.log ({ assignment })
/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */
let allAssignments;
assignment.forEach(assignment) {
    allAssignments.push(assignment)
  }


/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */

let completedAssignments = []
for (const index in assignments) {
    const assignment = assignments[index]

    if (assignment.completed) {
    
        completedAssignments.push(assignment)
    }
}

console.log({completedAssignments})



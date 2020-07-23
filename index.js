/**

    We will push to github all along the way so we track our week and keep a log

    Declaring an Array with Objects

    1)  Declare and initialize an array of
     `assignments` with `name` and `completed` properties. 
     Name the array `assignments`.  `completed` will have boolean values.

 */
/*let assignments =[
    {
        name: 'week-07-perfect-lineup', 
        completed: false
    },
    {
        name: 'week-06-10-10-10',
        completed: false
    },
    {
        name: 'week-04-fantasy-scoring',
        completed: true
    },
    {
        name: 'week-06-hazy-calculator',
        completed: true
    }
]

module.exports = {
    assignments
}
*/

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
 
    3) Loop through the data using a for loop. 
    Just console.log within the loop to show each item within the array

 */
for ( let index = 0; index < assignments.length; index = index + 1 ) {
    const assignment = assignments[index]
    console.log({ assignment })
}
//for.Each option
assignments.forEach( (assignment) => {
    console.log({ assignment })
} )

/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. 
    Loop through the `assignments` array data using a 
    for loop and assign each item from `assignments` 
    to the new `allAssignments` array

 */
let allAssignments = []
/*for (const index in assignments) {
    const assignment = assignments[index]
    allAssignments.push(assignment)
}
console.log({ allAssignments }) */
// forEach option
/*assignments.forEach( (assignment) => {
    allAssignments.push(assignment)
})
console.log({allAssignments}) */

allAssignments = assignments.map( (assignment) => {
    return assignment
} )
console.log(allAssignments)
/**


    Filtering
 
    5) Declare a new array named `completedAssignments`. 
    Loop through the `assignments` array data using a for loop.  
    Use a condition to only add to `completedAssignments` where 
    there are property values with `completed` of `true`

 */

/*let completedAssignments = []
completedAssignments = assignments.filter( (assignment) => {
    let {completed} = assignment;
    return completed
} )
console.log(completedAssignments)*/
/*let completedAssignments = []
completedAssignments = assignments.map( (assignment) => {
    if (completed = true)
    return assignment.completed
})
console.log(completedAssignments)*/

let completedAssignments = []
for(const index in assignments) {
    const assignment = assignments[index]

    if (assignment.completed) {
        completedAssignments.push(assignment)
    }
}
console.log({completedAssignments})
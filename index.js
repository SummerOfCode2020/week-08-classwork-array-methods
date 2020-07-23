/**

    We will push to github all along the way so we track our week and keep a log

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.
    
 */  
    const assignments = [{
        name: 'project 1',
        completed: true
    }, {
        name: 'project 2',
        completed: false
    }, {
        name:'project 3',
        completed: true
    }]

    console.log(assignments)

    module.exports = {
        assignments
    }


/*

// using for-in with an array gives us access to the index number value only

 /**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function

    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */


/**

    Looping and using references to arrays a given positions
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */
// option 1:
for (let index = 0; index < assignments.length; index++) {
    // singular variable created to make "assignments[index]" easy to type in the future as just "assignment" to reference it
    const assignment = assignments[index]
    console.log({ assignment })
}


// option 2:
// using a for-in with an array gives us access to the index number value only
for (let index in assignments) {
    const assignment = assignments[index]
    console.log(index, assignment)
}

// option 3:
assignments.forEach( function (assignment) {
    console.log({ assignment })
} )
//or 
assignments.forEach( (assignment) => {
    console.log({ assignment })
} )

//    Looping and Assignment

//    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array


let allAssignments = []

assignments.forEach( (assignment) => {
    allAssignments.push(assignment)
})

console.log({ allAssignments })

// map similar to forEach

//let allAssignment = assignments.map( (assignment) => {
//    return assignment
//} ) 

// or to remove excess syntax

//let allAssignments = assignments.map( assignment => assignment )

//console.log(allAssignments)







/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `completedAssignments` where there are property values with `completed` of `true`

 */

let completedAssignments = []

assignments.forEach( (assignment) => {
    if (assignment.completed === true) {
        return completedAssignments.push(assignment)
    }
}) 

console.log({ completedAssignments })

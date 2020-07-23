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
    }]

    console.log(assignments)

    module.exports = {
        assignments
    }


/*

// using for-in with an array gives us access to the index number value only



    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */  
let allAssignments = []

assignments.forEach( (assignment) => {
    allAssignments.push(assignment)
})

console.log({ allAssignments})







/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */



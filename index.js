/**

    We will push to github all along the way so we track our week and keep a log



    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */
/*
let assignments = [{
    assignment1: {
        name: '', 
        completed: true
    }, 
    assignment2: {
        name: '',
        completed: false
    },
    assignment3: {
        name: '',
        completed: true
    },
}];
*/



// Referencing code in other files

/* 2a)  Great work! Now move that array initialization out into its own file. 
See ./data/assignments.js where you will initialize the data in place of inline in this function
copy/pasted the function into assignments.js and added `module.exports = {
assignments
}`
*/

// 2b) "Import" that data into this file in place of the inline code you had in step 1
const { assignments } = require('./data/assignments');

// console.log(assignments);




/**

    Looping and using references to arrays a given positions

    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */

/*
 for (let i = 0; i < assignments.length; i++) {
    console.log(assignments[i])
};
*/

/**

    Looping and Assignment

    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */

// let allAssignments = []

/*
function loop(assignment) {
    for (let i = 0; i < assignments.length; i++) {
        return allAssignments.push(assignments[i]);
    };
};
console.log(allAssignments);
*/

/*
let assigning = loop => {
    for (let i = 0; i < assignments.length; i++) {
        allAssignments.push(assignments[i]);
    };
}
*/
/*
console.log({ allAssignments });
console.log(assignments);
*/
// FOR IN
/*
for (let i in assignments) {
    const assignment = assignments[i]
    console.log({ i })
};
*/

// forEach
/*
assignments.forEach((assignment) => {
    allAssignments.push(assignment);
})


console.log({ allAssignments });
console.log(assignments);
*/
/*
let allAssignments = assignments.map((assignment) => assignment)
console.log(allAssignments);
*/
/**
   
    Filtering

    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  
    Use a condition to only add to `completedAssignments` where there are property values with `completed` of `true`
 */

let completedAssignment = assignments.map(completedAssignment => {
    if (completedAssignment.completed === true) {
        return completedAssignment
    }
})
console.log(completedAssignment);
console.log(assignments);


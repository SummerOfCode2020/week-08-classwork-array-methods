/**

    We will push to github all along the way so we track our week and keep a log

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */

   

 /**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function

    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */

    const { assignments } = require('./data/assignments.js')

   // console.log(assignments)

/**

    Looping and using references to arrays a given positions
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */

 for (let i = 0; i < assignments.length; i++) {
     console.log(assignments[i])
 }

/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */

 let allAssignments = []

 for (let i = 0; i < assignments.length; i++) {
     allAssignments.push(assignments[i])
 }

 console.log(allAssignments)

/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */

 let completedAssignments = []
 for (let i = 0; i < assignments.length; i++) {
     if (assignments[i].completed === true) {
         completedAssignments.push(assignments[i])
     }}

     console.log(completedAssignments)

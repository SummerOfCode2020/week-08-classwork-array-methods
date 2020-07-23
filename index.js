/**

    We will push to github all along the way so we track our week and keep a log

    a) code in git, start working, first step: git checkout -b answer

    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */
const { assignments } = require('./data/assignments')
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
for(let i = 0;i< assignments.length; i++) {
    console.log(assignments[i])
}
/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments` array data using a for loop and assign each item from `assignments` to the new `allAssignments` array

 */
console.log('= = = = = = = = =')
let allAssignments = []
for(let i = 0; i<assignments.length; i++) {
    allAssignments.push(assignments[i])
}
console.log({allAssignments})
/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */
console.log('= = = = = = = = =')
let completedAssignments = []
assignments.forEach(function(item){
    for(let key in item) {
        const value = item[key]
        if (key === 'completed') {
            if (value) {
                completedAssignments.push(item)
            }
        }
    }
})

function isCompleted (obj) {
    for(let key in obj) {
        const value = obj[key]
        if (key === 'completed') {
            return value
        }
    }
}

let completedAssignments2 = assignments.filter(isCompleted)

console.log({completedAssignments})
console.log({completedAssignments2})

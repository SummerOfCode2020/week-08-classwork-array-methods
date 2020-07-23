/**

    We will push to github all along the way so we track our week and keep a log
    a)  code in git, start working.  First step: 'git checkout -b answer'


    Declaring an Array with Objects

    1)  Declare and initialize an array of `assignments` with `name` and `completed` properties. Name the array `assignments`.  `completed` will have boolean values.

 */

const { assignments } = require('./data/assignments')
/*console.log({assignments})


 /**

    Referencing code in other files
 
    2a)  Great work! Now move that array initialization out into its own file. 
        See ./data/assignments.js where you will initialize the data in place of inline in this function

        

    2b) "Import" that data into this file in place of the inline code you had in step 1
    

  */

/*for (let i = 0; i < assignments.length; i = i + 1) {
    const assignment = assignments [i]
    console.log({ assignment })
}


//assignments.forEach((assignment) => { })

/*



    Looping and using references to arrays a given positions
 
    3) Loop through the data using a for loop. Just console.log within the loop to show each item within the array

 */



/**

    Looping and Assignment
 
    4) Declare a new array named `allAssignments`. Loop through the `assignments`
    array data using a for loop and assign each item from `assignments` to the new
    `allAssignments` array

 */

const allAssignments = []
for (let i = 0; i < assignments.length; i = i + 1) {
    allAssignments[i] = assignments [i]
}

console.log(allAssignments)

/**

    Filtering
 
    5) Declare a new array named `completedAssignments`. Loop through the `assignments` array data using a for loop.  Use a condition to only add to `allAssignments` where there are property values with `completed` of `true`

 */



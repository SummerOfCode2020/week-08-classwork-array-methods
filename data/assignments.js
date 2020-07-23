const assignments = [
    { name: 'The Perfect Lineup', completed: false },
    { name: 'Hazy Calculator', completed: true },
    { name: 'Password Validator', completed: true }
]

function assignmentsImport(assignments) {
    const allAssignments = []
    assignments.forEach(function (assignment) {
        // console.log({ assignment })
        allAssignments.push(assignment)
    })
        return {allAssignments}
}
console.log(assignmentsImport(assignments))


module.exports = assignmentsImport
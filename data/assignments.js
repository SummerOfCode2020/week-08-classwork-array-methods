const assignments = [
    { name: 'The Perfect Lineup', completed: false },
    { name: 'Hazy Calculator', completed: true },
    { name: 'Password Validator', completed: true }
]

function assignmentsImport(assignments) {
    const completedAssignments = []
    assignments.forEach(function (assignment) {
        if (assignment.completed == true) {
        // console.log({ assignment })
        completedAssignments.push(assignment)
        }
    })
        return {completedAssignments}
}
console.log(assignmentsImport(assignments))



module.exports = {
    assignmentsImport
    }
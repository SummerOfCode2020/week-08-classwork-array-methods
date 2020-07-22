const assignments = [
    { name: 'The Perfect Lineup', completed: false },
    { name: 'Hazy Calculator', completed: true },
    { name: 'Password Validator', completed: true }
]

function assignmentsImport(assignments) {
    assignments.forEach(function (assignment) {
        console.log({ assignment })
    })
    return assignments
}
console.log(assignmentsImport(assignments))

module.exports = assignmentsImport
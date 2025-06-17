const students = [
    { name: "Jacob", score: 80 },
    { name: "Jovan", score: 60 },
    { name: "Alaiza", score: 75 },
    { name: "Anna", score: 90 },
    { name: "Maureen", score: 68 }
]
const formatted = students.map((student) => {
    return `${student.name} got ${student.score}%${student.score >= 75 ? '(passed)' : '(failed)'}`
});
document.getElementById('result').innerHTML = formatted.join('<br>')
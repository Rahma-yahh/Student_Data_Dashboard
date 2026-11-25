const students = [
    { name: "Andi Saputra", class: "Full Stack A", score: 85 },
    { name: "Budi Santoso", class: "Full Stack A", score: 78 },
    { name: "Citra Lesatari", class: "Full Stack B", score: 92 },
    { name: "Dewi Anggraini", class: "Backend Core", score: 88 },
    { name: "Eko Prasetyo", class: "Backend Core", score: 75 },
    { name: "Fina Amelia", class: "Full Stack A", score: 95 },
    { name: "Gilang Ramadhan", class: "Full Stack B", score: 80 },
    { name: "Hani Fitriani", class: "Backend Core", score: 89 },
    { name: "Irfan Hakim", class: "Full Stack B", score: 70 },
    { name: "Joko Susilo", class: "Backend Core", score: 82 },
];


const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable"); 
const averageScore = document.getElementById("averageScore");

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();

    const filteredStudents = students.filter((student) => {
        return student.name.toLowerCase().includes(keyword);
        });
    renderStudents(filteredStudents)
});
    function renderStudents(data) {
        const rows = data.map((student, index) => {

            let scoreClass;
            if (student.score >= 85) {
                scoreClass = "text-bg-success";
            } else if (student.score >= 75) {
                scoreClass = "text-bg-warning";
            } else {
                scoreClass = "text-bg-danger"
            }

            return `
        <tr>
            <td>${index + 1}</td>
            <td class="text-start">${student.name}</td>
            <td><span class="badge text-bg-secondary">${student.class}</span></td>
            <td><span class="badge ${scoreClass}">${student.score}</span></td>
        </tr>
    `;
});
    studentTable.innerHTML = rows.join("");
const totalScore = data.reduce((sum, student)=> {
    return sum + student.score;
}, 0);
const average = data.length > 0
    ? totalScore / data.length
    : 0;
    averageScore.textContent = average.toFixed(2)
}
renderStudents(students);





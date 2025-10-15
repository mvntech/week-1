// === array of objects ===
const students = [
    { name: "Ali", score: 85 },
    { name: "Muntaha", score: 95 },
    { name: "Sara", score: 60 },
    { name: "Umair", score: 72 },
    { name: "Faizan", score: 43 },
];

// === loops ===
let total = 0;
for (const student of students) {
  if (student.score > 70) {
    total += student.score;
  }
}
console.log(`Total of high scores (loop): ${total}\n`);

// === filter, map, reduce ===
const totalHighScores = students
.filter(student => student.score > 70)
.map(student => student.score)
.reduce((sum, score) => sum + score, 0);

console.log(`Total of high scores (Array of Objects): ${totalHighScores}\n`);

const topStudents = students.filter(({ score }) => score > 70).map(({ name }) => name);
console.log(`Top students: ${topStudents.join(", ")}`);
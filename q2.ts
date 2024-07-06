// define interface for Student object
/* Your code here */
interface Students {
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students : Students[]) {
  /* Your code here */
  const topnames = students
  .filter((students) => students.score > 8)
  .map((students) => students.name);
  
  return topnames;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//ณัฐวรา ไชยสิทธิ์ 660610758

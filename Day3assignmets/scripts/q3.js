console.log("q3");

let marks = Number(prompt("Enter your marks between 0-100"));


console.log("conditional oprator");
if (marks < 50) {
  console.log(`Marks are '${marks}' and grade is 'D'`);
} else if (marks >= 50 && marks <= 59) {
  console.log(`Marks are '${marks}' and grade is 'C'`);
} else if (marks >= 60 && marks <= 79) {
  console.log(`Marks are '${marks}' and grade is 'B'`);
} else if (marks >= 80 && marks <= 100) {
  console.log(`Marks are '${marks}' and grade is 'A'`);
} else {
  console.log(`Marks are '${marks}' and between 0-100`);
}


console.log("Ternary Operator");
let result =
  marks < 50
    ? `Marks are '${marks}' and grade is 'D'`
    : marks >= 50 && marks <= 59
    ? `Marks are '${marks}' and grade is 'C'`
    : marks >= 60 && marks <= 79
    ? `Marks are '${marks}' and grade is 'B'`
    : marks >= 80 && marks <= 100
    ? `Marks are '${marks}' and grade is 'A'`
    : `Marks are '${marks}' and  between 0-100`;
console.log(result);



console.log("q2");

const student = {
  name: "Helsinki",
  age: 24,
  projects: {
    diceGame: "Two player dice game using JavaScript",
  },
};

let {
  name,
  age,
  projects: { diceGame },
} = student;


console.log({ name, age });

console.log(name, age, diceGame);
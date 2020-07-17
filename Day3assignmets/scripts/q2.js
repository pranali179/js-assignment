console.log("q2");

let user = String(prompt('enter os name and version seprated by aspace'));
let input = user.split(" ");
console.log(`the os name is '${input[0]}' and version is '${input[1]}'`);
document.write("positive number from user.");
document.write("");
let num;

do {
  num = prompt("Enter positive number to print array", 0);
} while (num <0);
document.write(num);
document.write("<br/>");

document.write(" Makes an array of numbers till number given by user");
document.write("");
var a = [];

for (var i = 1; i <= num; i++) {
   a.push(i);
}
document.write(a);
document.write("<br/>");
document.write(" Use higher order function to filter the odd numbers");
document.write("");
let odd=a.filter(el=>el%2==1)
document.write(odd);
document.write("<br/>");
document.write("  Generate and array of cubes of the filtered numbers");
document.write("");
let cube=a.filter(el=>el%2==1).map(el=>el**3)
document.write(cube);

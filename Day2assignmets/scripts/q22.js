console.log("methods of string and array");

let arr = ["one","two","three"];
console.log(arr);
//join
console.log(arr.join("*"));

//pop
console.log(arr.pop());

//push
console.log(arr.push("four"));

//shift
console.log(arr.shift());

//unshift
console.log(arr.unshift("five"));

//splice
console.log(arr.splice(2,0,"four","five"));

//tostring
console.log(arr.toString());

//string methods
//lenght
var txt="please locate where locate occurs";
console.log(txt.length);
//indexOf
console.log(txt.indexOf("locate"));
//search
console.log(txt.search("locate"));
//slice
console.log(txt.slice(7,13));
//substring
console.log(txt.substring(7,13));
//substr
console.log(txt.substr(7,6));
//replace
console.log(txt.replace("locate","you"));
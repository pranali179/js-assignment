console.log("q3 ");
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())
.then(data=>console.log(data))

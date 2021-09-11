// 2 - DOM Selectors for single elements
//=======================================================================

// Single element selectors
document.getElementById(); // get a single element by its id
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// set the element to a variable
const taskTitle = document.getElementById('task-title');

// Change styling by passing it some css
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none'; // this will remove something from the DOM

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>'; // will insert html

document.querySelector(); // used to select 'anything' 

console.log(document.querySelector('#task-title')); // use css selection syntax # for id
console.log(document.querySelector('.card-title')); // . for class
console.log(document.querySelector('h5')); // tag name

document.querySelector('li').style.color = 'red'; // first li
document.querySelector('ul li').style.color = 'blue'; // first li in the first ul

document.querySelector('li:last-child').style.color = 'red'; // all css selectors work including pseudoclasses
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // will only affect the first odd
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // will only affect the first even
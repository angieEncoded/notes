// 3 - DOM Selectors for multiple elements
//=======================================================================

// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item'); // will give us that array-like structure
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello'; // we can treat it like an array and use index notation to grab elements

// select an item with querySelector and THEN use getElementsByClassName
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);
//document.getElementsByTagName
let lis = document.getElementsByTagName('li'); // grab all the elements by the tag
console.log(lis); // gives us another html 'collection'
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Conver HTML Collection into array
lis = Array.from(lis);

lis.reverse(); // now array methods work

lis.forEach((li, index) => { // including the forEach function
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.querySelectorAll - this returns a NODE LIST - which is iterable without conversion
const items = document.querySelectorAll('ul.collection li.collection-item');
// this is jquery-like syntax

items.forEach(function (item, index) { // change all the instances to Hello with the index number
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)'); // now odd and even CSS selectors work
const liEven = document.querySelectorAll('li:nth-child(even)');

// change the background on the odds
liOdd.forEach(function (li, index) {
    li.style.background = '#ccc';
});

// change the background on the evens
for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);




































// Traversing the DOM
//==================================================

let val;

// Select the very first instance of ul.collection
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
// Note that line breaks are considered 'empty' text nodes and will appear
val = list.childNodes; // this will list all nodes incuding text notes
val = list.childNodes[0];
val = list.childNodes[0].nodeName; // return the name of the node
val = list.childNodes[3].nodeType; // and the type which corresponts to the number map below

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes - this is the preferred way to avoid all the empty text nodes
// NOTE this is an html collection - convert to an array to loop if needed
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild; // gives us the first node whether it's an element or not
val = list.firstElementChild; // get the first actual element child

// Last child
val = list.lastChild; // same here, if last node is some text line break you will get that
val = list.lastElementChild; // use same technique here to get the element

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode; // this is mostly interchangeable with parentElement below
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // head up the dom

// Get next sibling
val = listItem.nextSibling; // again, here we might get some random text node.
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // use this to get elements

// Get prev sibling
val = listItem.previousSibling; // and text nodes again
val = listItem.previousElementSibling; // get the previous actual element. may be null if there is no previous sibling
console.log(val);
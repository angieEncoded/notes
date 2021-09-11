let val;

// 1 - Examining the document object
//=======================================================================

// We can access elements on the document object with dot notation
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// We can access elements by their 'type' but this is not the preferred way to get things
val = document.forms;
val = document.forms[0]; // use array indexing notation
val = document.forms[0].id; // and dot notation to access things
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src'); // We can get attributes as well

let scripts = document.scripts; // What we get back is a 'collection' - it's an array-like object but not an array

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) { // convert it to an array to work with it like an array
    console.log(script.getAttribute('src'));
});

console.log(val);
# Javascript Refresher
- Let and Const
    - Ways of creating variables
    - const creates a constant variable
    - let creates a changeable variable
    - var still works, but it's discouraged now
    - jsbin.com is a useful website for experimenting
    - examples
        - ```js var myName = "Rory";```
        - ```js let myName = "Bablet";```
        - ```js const myName = "Bablet";```
            - We cannot reassign this
- Arrow functions
    - Different syntax for creating javascript functions
    - Normal functions looked like this
        ```js 
        function myFunction(){
            // Something in here
        }
        ```
    - Other syntax
        ```js 
        const myFunction = (){
            // Something in here
        }
        ```
    - Arrow function looks like this
        ```js 
        const myFunction = () => {
            // Something in here
        }
        ```
        - Bit shorter
        - solves issues we had with the 'this' keyword
            - this doesn't always refer to what we expected it to refer to
            - now when it is in an arrow function, it will always keep its context
    - Alternatives formats 
        - If you only have one argument in an arrow function, you can omit the parentheses
            ```js 
            const printMyName =  name => {}
            ```
        - Function body can also be abbreviated
        - We can omit the {} if are only returning a value
            - ```js const multiply = (number) => number * 2;```
            - We must omit the return keyword in this case
            - This is a concise and short way to write this function
- Exports and imports
    - Used with modules
    - We split up code over multiple files to make our applications modular
    - We have to import things in the correct order to use them
    - For example, we have this file which has an object
        - cat.js
            ```js
            const cat = {
                name: "Bablet",
                breed: "Domestic Shorthair",
                pattern: "Tabby"
            } 
            export default cat;
            ```
        - This file exports the cat object as the default for us to import elsewhere
        - util.js
            ```js
            export const renameCat = () => {}
            export const multiplier = 10;
            ```
        - Importing that data
        - We can call this whatever we want
            ```js
            import cat from './cat.js';
            ```
        - This one we have to import by name used with destructuring
            ```js
            import {renameCat, multiplier} from util.js
            ```
        - We can import with an alias to change the name of an export with the as keyword
            ```js
            import {something as SomethingElse } from './util.js'
            ``` 
        - We can import everything with * and then name it to use with dot notation
            ```js 
            import * as bundled from './util.js'
            ```
            - Then we can use these things as ```bundled.somethingFromtheBundle()```
- Classes
    - Blueprints for objects
    - Created with the class keyword
    - Can have properties and methods
        - properties are variables attached to classes
        - methods are functions attached to classes 
    - instantiated with the 'new' keyword
        - convenient way of creating constructor functions
    - supports inheritance
        - gets all props and methods from other classes and might add new things to it
- creating some classes
```js 
class Tabby {
    constructor() {
        this.breed = 'Tabby';
    }

    printBreed() {
        console.log(this.breed)
    }
}

class Cat extends Tabby {
    constructor(name) {
        super(); // This will intialize the parent constructor
        this.name = name;
    }

    printCat() {
        console.log(this.name)
    }
}

const cat = new Cat("Bablet");
cat.printCat();
cat.printBreed();
```
- More modern syntax
    - Assign property directly in the class, skipping the constructor function form
        - behind the scenes the constructor function is still created
        ```myProperty = value```
    - Use arrow functions with assignment syntax for methods 
        ```myMethod = () => {}```
        - No problems with the ```this``` keyword
        - No longer need to call super() as well
```js
class Kitten {
    weight = 3;
    printWeight = () => {
        console.log(this.weight)
    }
}

class Sasha extends Kitten {
    name = "Sasha";
    printName = () => {
        console.log(this.name)
    }
}

const myKitten = new Sasha();
myKitten.printWeight();
myKitten.printName();
```

- Spread and Rest operators
    - ...
    - Spread
        - used to split up array elements
        ```js
        const newArray = [...oldArray, 1,2] // We can add things to it
        ```
        - We can use them with objects too
        ```js
        const newObject = {...oldObject, newProp:5};
        ```
    - Rest
        - merge a list of function arguments into an array
        ```js
            function sortArguments(...args){
                return args.sort();
            }
        ```
- Spread examples
```js
const kittens = ["Sasha", "Shaky", "Shuttle"];
const allCatsAndKittens = [...kittens, "Bablet", "Rory"];
console.log(allCatsAndKittens)
```
```js
const kitten = {
    name: "Shaky"
}

const kittenDetails = {
    ...kitten,
    age: "3 Months"
}

console.log(kittenDetails)
```
- Rest examples
```js
const printKittenNames = (...names) => { // collect all arguments sent in
    // Puts them in an array so we can do things like loop over them
    for (let name of names) {
        console.log(name)
    }
}

printKittenNames("Sasha", "Babs", "Rory", "Shaky", "Shuttle");

// Useful additional information on using the filter method
const filter = (...args) => {
    // filter() is a built in array method to match only specific items in an array
    return args.filter(element => (element === 1))
}
// The filter will only print the 1's we passed into the function
console.log(filter(1, 2, 3, 4, 1, 1, 3, 2))
```
- destructuring
    - Used to extract array elements or object properties and store them in variables

```js
// Destructuring with Arrays
const cats = ["Babs", "Rory"];
// Interstingly, let is not needed here but is for the object. 
[cat1, cat2] = cats;
console.log(cat1)
console.log(cat2)

// Destructuring with objects
const kittens = {
    Sasha: "Longhair black",
    Shaky: "Shorthair black",
    Shuttle: "Shorthair tuxedo"
}

// Need let in front of this - check page 77 in Eloquent Javascript
let { Sasha, Shaky, Shuttle } = kittens;
console.log(Sasha, Shaky, Shuttle)
```

- References and primitive types
    - Primitive types
        - if I create a number with ```const number = 1``` and then create another variable based on it, the value will be copied in. 
    - Reference types
        - object and arrays
        - if I create an object and then create another object based on that one, both will point to the same place
        - the pointer is what gets copied
        - Changing something in the second object or array will change the original...
        - this can lead to unexpected behaviors if we copy arrays or objects like that
        - We can copy this in an immutable way
            - use the spread operator which will spread all the properties into the new array or object
            - this DOES create a completely new object\array with its own pointer
- Array functions
    - All of these methods work basically the same. 
    - They will take a function as an argument, and they will run that function on each element of the array
```js
// map() method
// it will take a function as an argument
// Each item in the array is passed in - I called it catName
// And it can do 'something' to each element inside the function
const allCats = ["Bablet", "Rory", "Sasha", "Shaky", "Shuttle"];

// This is placed into a completely new array
const upperCaseCats = allCats.map((catName) => {
    // in this case we return each name in uppercase
    return catName.toUpperCase();
})
// Old array is unchanged
console.log(allCats)
// New array is created with the new values
console.log(upperCaseCats)
```



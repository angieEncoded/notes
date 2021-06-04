// Spread example with Array
const kittens = ["Sasha", "Shaky", "Shuttle"];
const allCatsAndKittens = [...kittens, "Bablet", "Rory"];
console.log(allCatsAndKittens)

// Spread example with object
const kitten = {
    name: "Shaky"
}

const kittenDetails = {
    ...kitten,
    age: "3 Months"
}

console.log(kittenDetails)


// Rest Example
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
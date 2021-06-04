// All of these methods work basically the same. 
// they will take a function as an argument, and they will run that function on each element of the array
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




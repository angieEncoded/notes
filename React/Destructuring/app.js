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
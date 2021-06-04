// Old Syntax
//=================================================
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

// New syntax
//===================================================
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


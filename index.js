/* 

Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.

Add a method called getDescription to the Car prototype, which returns a string containing information about the car.

Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.

Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.

Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.
 */



class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    
    getDescription() {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    
    getDescription() {
        console.log(`${this.make} ${this.model} ${this.year}, Range: ${this.range} miles`);
    }
}

const electricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
electricCar.getDescription();

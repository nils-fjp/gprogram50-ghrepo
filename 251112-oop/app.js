// 2025-11-12-oop\ object oriented programming

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        console.log(`${this.brand} ${this.model} startar`);
    }

    stop() {
        this.isRunning = false;
        console.log(`${this.brand} ${this.model} stannar`);
    }
}

/* 
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.isRunning = false;
  }

  start(self = this) {
    self.isRunning = true;
    console.log(`${self.brand} ${self.model} startar`);
  }

  stop(self = this) {
    self.isRunning = false;
    console.log(`${self.brand} ${self.model} stannar`);
  }
}

const car = new Car("Volvo", "XC90");
car.start(); // Volvo XC90 startar
car.stop();  // Volvo XC90 stannar */

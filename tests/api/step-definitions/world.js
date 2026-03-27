const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.response = null;
    this.licensePlate = null;
    this.zipCode = null;
  }
}

setWorldConstructor(CustomWorld);

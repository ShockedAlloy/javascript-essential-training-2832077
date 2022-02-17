/**
 * Create a car object.
 */

const car = {
  name: "Tech",
  tires: 4,
  color: "black",
  make: "Tesla",
  model: "Model Y",
  newUsed: false,
  bodyStyle: "sedan",
  package: {
    modelOne: {
      name: "Model 3",
    },
    modelTwo: {
      name: "Model Y",
    },
  },
  engineOn: false,
  startEngine: function (engineStatus) {
    this.engineOn = engineStatus;
  },
  newPackage: function (modelOne, modelTwo) {
    this.package.modelOne = modelOne;
    this.package.modelTwo = modelTwo;
  },
};

console.log("I was looking at a ", car);
console.log("The package I would like is the ", car[modelOne]);

car.newPackage(modelThree[name("Model X")]);

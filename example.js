class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  sayHello() {
    console.log("Hello");
  }
}

class Dog extends Animal {
  constructor(type, legs, breed) {
    super(type, legs);
    this.breed = breed;
  }

  bark() {
    console.log("woof");
  }
}

const myDog = new Dog("dog", 4, "Shiba Inu");
console.log(myDog);

myDog.sayHello();

myDog.bark();

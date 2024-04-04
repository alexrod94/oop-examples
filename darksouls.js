class Player {
  constructor(name, health, objectPower, type) {
    this.name = name;
    this.health = health;
    this.power = objectPower;
    this.type = type;
    this.estus = 5;
  }

  setHealth(damage) {
    this.health -= damage;
  }
}

class Boss {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setHealth(damage) {
    this.health -= damage;
  }
}

const lawrence = new Player("Lawrence", 100, 20, "knight");
const nito = new Boss("Nito", 200, 40);

while (lawrence.health >= 0 && nito.health >= 0) {
  nito.setHealth(lawrence.power);
  lawrence.setHealth(nito.power);

  console.log(`${lawrence.name} has ${lawrence.health}`);
  console.log(`${nito.name} has ${nito.health}`);
}

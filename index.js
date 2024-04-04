// Crear la plantilla (Clase)
class Pokemon {
  // Valores
  constructor(name, type, attack) {
    this.name = name;
    this.type = type;
    this.attack = attack;
  }
  // Métodos = function

  // Getter
  getName() {
    return this.name;
  }

  // Setter
  setName(newName) {
    this.name = newName;
  }

  sayHello() {
    return "Hello";
  }
}

// Usar la plantilla para crear objetos
const pikachu = new Pokemon("Pikachu", "Electric", 50);

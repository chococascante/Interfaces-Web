class Animal {
  constructor(colorPiel, cantidadExtremidades) {
    this.colorPiel = colorPiel;
    this.cantidadExtremidades = cantidadExtremidades;
  }

  mover() {
    console.log("Me moví!!!");
  }
}

class Perro extends Animal {
  constructor(raza, colorPiel, cantidadExtremidades) {
    super(colorPiel, cantidadExtremidades);
    this.raza = raza;
  }

  ladrar() {
    console.log("Woof!");
  }
}

class Persona extends Animal {
  constructor(nombre, apellido, edad, colorPiel, cantidadExtremidades) {
    super(colorPiel, cantidadExtremidades);
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  hablar() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
}

const persona = new Persona("Luis", "Cascante", 250, "rojo", 4);
console.log(persona);

const perro = new Perro("zagua", 250, "rojo", 4);
perro.hablar();

perro.ladrar();
persona.mover();

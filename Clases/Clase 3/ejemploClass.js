class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
}

const persona = new Persona("Luis", "Cascante", 250);
console.log(persona);
persona.cambiarNombre("Alonzo");
console.log(persona);

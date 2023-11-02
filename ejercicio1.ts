interface Vehicle {
  model: string;
  year: number;
  color: string;
}

interface Car extends Vehicle {
  placa: number;
  neumaticos: number;
}

interface Motorcycle extends Vehicle {
  colorStickers: string;
  espejos: string;
}

class VehicleClase implements Car, Motorcycle {
  model: string;
  year: number;
  color: string;
  placa: number;
  neumaticos: number;
  colorStickers: string;
  espejos: string;

  constructor(
    model: string,
    year: number,
    color: string,
    placa: number,
    neumaticos: number,
    espejos: string,
    colorStickers:string
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.placa = placa;
    this.neumaticos = neumaticos;
    this.espejos = espejos;
    this.colorStickers = colorStickers;
  }
}

const car1: Car = new VehicleClase("Chevrolet", 2023, "rojo", 12345, 4, "espejos negros", "negros");
const motorcycle1: Motorcycle = new VehicleClase("moto automatica", 2023, "azul", 0, 2, "espejos grandes","negros");

console.log("Datos del coche:");
console.log(`Modelo: ${car1.model}`);
console.log(`Año: ${car1.year}`);
console.log(`Color: ${car1.color}`);
console.log(`Placa: ${car1.placa}`);
console.log(`Neumáticos: ${car1.neumaticos}`);

console.log("\nDatos de la motocicleta:");
console.log(`Modelo: ${motorcycle1.model}`);
console.log(`Año: ${motorcycle1.year}`);
console.log(`Color: ${motorcycle1.color}`);
console.log(`Color de calcomanías: ${motorcycle1.colorStickers}`);
console.log(`Espejos: ${motorcycle1.espejos}`);

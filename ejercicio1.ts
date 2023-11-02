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
      espejos: string
    ) {
      this.model = model;
      this.year = year;
      this.color = color;
      this.placa = placa;
      this.neumaticos = neumaticos;
      this.espejos = espejos;
    }
  }
  
  const car1: Car = new VehicleClase("Chevrolet", 2023, "rojo", 12345, 4, "espejos negros");
  const motorcycle1: Motorcycle = new VehicleClase("moto automatica", 2023, "azul", 0, 2, "espejos grandes");

console.log(car1);
interface BaseObject {
    id: number;
  }
  
  interface User extends BaseObject {
    name: string;
    email: string;
  }
  
  interface Product extends BaseObject {
    name: string;
    price: number;
  }
  
  interface Order extends BaseObject {
    user: User;
    products: Product[];
  }
  
  // Función genérica para imprimir datos
  function imprimirDatos<T>(datos: T): void {
    console.log(datos);
  }
// Ejemplo de uso
const usuario: User = { id: 1, name: 'Juan', email: 'juan@example.com' };
const producto: Product = { id: 2, name: 'Laptop', price: 999 };
const orden: Order = {
  id: 3,
  user: usuario,
  products: [producto],
};

imprimirDatos(usuario);
imprimirDatos(producto);
imprimirDatos(orden);

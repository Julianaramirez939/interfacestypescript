
interface Product {
    name: string;
    precio: number;
    descripcion: string;
  }
  
  interface Inventory {
    products: Product[];
    addProduct(product: Product): void;
    findProductByName(name: string): Product | undefined;
  }
  

  class InventoryImpl implements Inventory {
    products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
      console.log(`Producto agregado: ${product.name}`);
    }
  
    findProductByName(name: string): Product | undefined {
      const foundProduct = this.products.find((product) => product.name === name);
      if (foundProduct) {
        console.log(`Producto encontrado: ${foundProduct.name}`);
      } else {
        console.log(`Producto no encontrado: ${name}`);
      }
      return foundProduct;
    }
  }
  

  const inventory = new InventoryImpl();
  
  const p1: Product = {
    name: 'Laptop',
    precio: 999,
    descripcion: 'Laptop de alta gama',
  };
  
  const p2: Product = {
    name: 'Smartphone',
    precio: 599,
    descripcion: 'Smartphone de gama media',
  };
  
  inventory.addProduct(p1);
  inventory.addProduct(p2);
  
  const searchName = 'Laptop';
  const foundProduct = inventory.findProductByName(searchName);
  if (foundProduct) {
    console.log('Detalles del producto encontrado:', foundProduct);
  } else {
    console.log(`No se encontró un producto con el nombre: ${searchName}`);
  }
  

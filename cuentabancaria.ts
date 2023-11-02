class CuentaBancaria {
    numeroCuenta: string;
    titular: string;
    saldo: number;
  
    constructor(numeroCuenta: string, titular: string, saldoInicial: number) {
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(cantidad: number): void {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se depositaron ${cantidad} en la cuenta de ${this.titular}.`);
      } else {
        console.log("El monto a depositar debe ser mayor que cero.");
      }
    }
  
    retirar(cantidad: number): void {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} de la cuenta de ${this.titular}.`);
      } else if (cantidad <= 0) {
        console.log("El monto a retirar debe ser mayor que cero.");
      } else {
        console.log("Fondos insuficientes para retirar.");
      }
    }
  
    consultarSaldo(): void {
      console.log(`Saldo de la cuenta de ${this.titular}: $${this.saldo}`);
    }
  }
  
  const cuenta1 = new CuentaBancaria("123374", "Juliana", 10000);
  const cuenta2 = new CuentaBancaria("7238833", "Arle", 2000);
  const cuenta3 = new CuentaBancaria("345678", "Nicolas", 500);
  
  cuenta1.consultarSaldo(); 
  cuenta2.consultarSaldo(); 
  
  cuenta1.depositar(500); 
  cuenta2.retirar(800);  
  
  cuenta1.consultarSaldo(); 
  cuenta2.consultarSaldo(); 

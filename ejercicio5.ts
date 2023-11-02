interface BaseDeDatos {
    conectar(): void;
    buscar(query: string): any[];
    actualizar(query: string, datos: any): boolean;
  }
  
  class BaseDeDatosMySQL implements BaseDeDatos {
    private conectada: boolean = false;
    private datos: Map<string, any> = new Map();
  
    conectar(): void {
      this.conectada = true;
      console.log('Conectado a la Base de Datos MySQL');
    }
  
    buscar(query: string): any[] {

      if (!this.conectada) {
        throw new Error('No se ha establecido una conexión a la base de datos.');
      }
  

      const resultado = this.datos.get(query) || [];
      return resultado;
    }
  
    actualizar(query: string, datos: any): boolean {

      if (!this.conectada) {
        throw new Error('No se ha establecido una conexión a la base de datos.');
      }
  

      this.datos.set(query, datos);
      return true;
    }
  }

  class BaseDeDatosSQLite implements BaseDeDatos {
    private conectada: boolean = false;
    private datos: Map<string, any> = new Map();
  
    conectar(): void {

      this.conectada = true;
      console.log('Conectado a la Base de Datos SQLite');
    }
  
    buscar(query: string): any[] {

      if (!this.conectada) {
        throw new Error('No se ha establecido una conexión a la base de datos.');
      }
  

      const resultado = this.datos.get(query) || [];
      return resultado;
    }
  
    actualizar(query: string, datos: any): boolean {
      if (!this.conectada) {
        throw new Error('No se ha establecido una conexión a la base de datos.');
      }

      this.datos.set(query, datos);
      return true;
    }
  }
  const mysqlDB = new BaseDeDatosMySQL();
  mysqlDB.conectar();
  mysqlDB.actualizar('usuario1', { nombre: 'Juliana' });
  const usuario1 = mysqlDB.buscar('usuario1');
  console.log('Resultado de MySQL:', usuario1);
  
  const sqliteDB = new BaseDeDatosSQLite();
  sqliteDB.conectar();
  sqliteDB.actualizar('usuario2', { nombre: 'Nicolas' });
  const usuario2 = sqliteDB.buscar('usuario2');
  console.log('Resultado de SQLite:', usuario2);

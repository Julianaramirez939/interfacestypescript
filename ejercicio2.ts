interface User {
    username: string;
    email: string;
  }
  
  interface Admin extends User {
    adminRol: string; 
  }
  
  function printUserData(user: User | Admin) {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
  
    if ('adminRol' in user) {
      console.log(`Admin Rol: ${(user as Admin).adminRol}`);
    }
  }

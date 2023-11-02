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
  const user: User = {
    username: "juliana",
    email: "jramirez@gmail.com",
  };
  
  const adminUser: Admin = {
    username: "nicolas",
    email: "123@gmail.com",
    adminRol: "admin",
  };
  
  printUserData(user); 
  printUserData(adminUser); 

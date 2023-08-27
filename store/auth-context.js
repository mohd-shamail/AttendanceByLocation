import { createContext } from "react";

 const AuthContext = createContext({
    token:"",
    isAuthenticated:false,
    authenticate:(token) => {},
    logout:()=> {},
  
 });
 export default AuthContext;
import React ,{useState} from 'react'
import AuthContext from './auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContextProvider = (props) => {
    const [authToken ,setAuthToken] = useState();
    const [geolocation ,setGeolocation] = useState([]);
    const [time ,setime] = useState();

    const authenticate = (token) => {
      setAuthToken(token);
      AsyncStorage.setItem("token",JSON.stringify(token));
    };

    const logout = () => {
      setAuthToken(null);
      AsyncStorage.removeItem('token');
    };

     
    // Current Location Picker
       function locationfetechHandler(location) {
         setGeolocation(location);
        };
       
     const value = {
      token:authToken,
      isAuthenticated: !!authToken,
      authenticate:authenticate,
      logout:logout,
      locationfetechHandler:locationfetechHandler,
    

     }

   return(
    <AuthContext.Provider value={value}>
       {props.children}
    </AuthContext.Provider>
   )
};

 export  default AuthContextProvider;
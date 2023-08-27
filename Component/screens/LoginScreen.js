import { useState , useContext } from 'react';
import AuthContent from '../Auth/AuthContent'
import {login} from '../utils/auth';
import LoadingOverlay from '../UI/LoadingOverlay';
import { Alert } from 'react-native';
import AuthContext from '../../store/auth-context';

const LoginScreen = () => {
   const [isAuthenticate , setisAuthenticate] = useState(false);
   const authCtx = useContext(AuthContext);

   const loginHandler =  async ({CID, uID, password}) => {
    setisAuthenticate(true);
    try {
    const token = login(CID,uID, password);
    authCtx.authenticate(token);
    } catch(error){
      Alert.alert('Login Failed!',
      'Please check your credentials or try again later!');
      setisAuthenticate(false);
    }; 
  }
  if(isAuthenticate){
    return <LoadingOverlay message='Logging in...'/>
  }
  return <AuthContent isLogin onAuthenticate = {loginHandler} />;
         
}

export default LoginScreen;
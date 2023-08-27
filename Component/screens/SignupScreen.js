import React,{useContext} from 'react'
import AuthContent from '../Auth/AuthContent';


const SignupScreen = () => {
  const signupHandler =() => {
    
  }

  return <AuthContent onAuthenticate = {signupHandler} />;
}

export default SignupScreen;
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FlatButton from '../UI/FlatButton'
import AuthForm from './AuthForm';
import { Colors } from '../../constants/styles';

const AuthContent = ({ isLogin, onAuthenticate }) => {
   const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    CID:false,
    uID: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if(isLogin){
      navigation.replace('Signup');
    }
    else{
      navigation.replace('Login');
    }
   
  }

  const submitHandler = (credentials) => {
    let { CID,uID, confirmEmail, password, confirmPassword } = credentials;

    uID = uID.trim();
    password = password.trim();
    const uIDlIsValid = uID.length > 5;
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !uIDlIsValid ||
      !passwordIsValid ||
      (!isLogin &&  !passwordsAreEqual))
     {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        uID: !uIDlIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ CID,uID, password });
   
    
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Register Now' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 120,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
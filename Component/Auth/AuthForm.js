import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../UI/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit }) {
  const [enteredCID, setEnteredCID] = useState('');
  const [enteredUID, setEnteredUID] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const updateInputValueHandler = (inputType, enteredValue) => {
    switch (inputType) {
      case 'CID':
        setEnteredCID(enteredValue);
        break;
      case 'uID':
        setEnteredUID(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
       
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }
  function submitHandler() {
    onSubmit({
      CID:enteredCID,
      uID: enteredUID,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
      <Input
          label="Company ID"
          onUpdateValue={updateInputValueHandler.bind(this, 'CID')}
          value={enteredCID}
        />
        <Input
          label="User ID"
          onUpdateValue={updateInputValueHandler.bind(this, 'uID')}
          value={enteredUID}
        />
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Register'}
          </Button>
        </View>
      </View>
    </View>
  );
}
export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
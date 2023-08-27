import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Component/screens/LoginScreen';
import SignupScreen from './Component/screens/SignupScreen';
import WelcomeScreen from './Component/screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider from './store/AuthContextProvider';
import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AuthContext from './store/auth-context';
import IconButton from './Component/UI/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationPicker from './Component/Attendance/LocationPicker';

const Stack = createNativeStackNavigator();


const AuthStack = ()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component = {LoginScreen }/>
      <Stack.Screen name="Signup" component = {SignupScreen} />
    </Stack.Navigator>
  );
}

const AuthenticatedStack = () => {
  const authCtx =  useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen}
      options={{
        headerRight:() => <IconButton icon="exit" color={'white'} size={24}
        onPress={authCtx.logout}/>
      }}
      />
         <Stack.Screen name="LocationPicker" component={LocationPicker}/>
    </Stack.Navigator>
  );
}

const Navigation= () => {
   const authCtx =  useContext(AuthContext);
  return (
    
    <NavigationContainer>
      { !authCtx.isAuthenticated && <AuthStack /> }
      { authCtx.isAuthenticated && <AuthenticatedStack/> }
    </NavigationContainer>
    
  );
}
const Root =() => {
  const[isTryingLogin , setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(()=>{
    async function fetchToken(){
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }


    fetchToken();

    }, [] );

    // if(isTryingLogin){
    //   return <AppLoading/>
    // }

    return <Navigation />;
};

 const App = () => {
  
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
      <Root/>
      </AuthContextProvider>
    </>
  );
}
export default App;
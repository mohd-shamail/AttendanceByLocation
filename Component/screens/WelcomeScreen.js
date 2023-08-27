import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import AuthContextProvider from '../../store/AuthContextProvider';
import { useNavigation } from '@react-navigation/native';
import AttendanceMark from '../Attendance/AttendanceMark';
import LocationPicker from '../Attendance/LocationPicker';



const Drawer = createDrawerNavigator();
function Welcome() {
  const navigation = useNavigation();
  function markAttendanceHandler() {
    navigation.navigate('LocationPicker');
  }
  return (
    <AuthContextProvider>
    <View style={styles.rootContainer}>
      <View style={styles.card}>

          <AttendanceMark onNavigate = {markAttendanceHandler}/>
          {/* <LocationPicker/> */}
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.text}>You authenticated successfully!</Text>
    </View>
    </AuthContextProvider>
  );
}
 const WelcomeScreen = () => {
  return(
   <Drawer.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#f9beda'},
    headerTintColor: 'black',
    drawerActiveBackgroundColor: '#f9beda',
    drawerActiveTintColor:'#c30b64',
    drawerStyle: { backgroundColor:'white'}
   }}>
    <Drawer.Screen name='Home' component={Welcome}
      options={{
      drawerIcon:({color , size})=> (
        <Ionicons name='home' color={color} size={size}/>
      )
    }}/>
   
    <Drawer.Screen name='Favorites' component={Welcome}
    options={{
      drawerIcon:({color , size})=> (
        <Ionicons name='heart' color={color} size={size}/>
      )
    }}/>
    <Drawer.Screen name='Trash' component={Welcome}
    options={{
      drawerIcon:({color , size})=> (
        <Ionicons name='trash' color={color} size={size}/>
      )
    }}/>
    <Drawer.Screen name='Archive' component={Welcome}
    options={{
      drawerIcon:({color , size})=> (
        <Ionicons name='archive' color={color} size={size}/>
      )
    }}/>
   </Drawer.Navigator>

  );
 }

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#f9beda',
  },
  card:{
    paddingBottom:100,
    paddingEnd:170,
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#eb1064',
    fontSize:30,
    marginBottom:10
  },
  text:{
    marginBottom:300,
  }
});
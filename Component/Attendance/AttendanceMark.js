import AttendanceCard from '../UI/AttendanceCard'
import React, { useContext, useState } from 'react'
import {  Alert } from 'react-native'
import {getCurrentPositionAsync ,
   useForegroundPermissions ,PermissionStatus} from 'expo-location';
   import AuthContext from '../../store/auth-context';
   import { useNavigation } from '@react-navigation/native';


const AttendanceMark = ({onPress ,onNavigate})  => {
  const[location , setlocation] = useState([]);
  const[locationPermission , requestPermission] = useForegroundPermissions();

   const navigation = useNavigation();
  
 async function verifyPermission() {
   if(locationPermission.status===PermissionStatus.UNDETERMINED) {
    const PermissionResponse = await requestPermission();
    return PermissionResponse.granted;
   }
   if(locationPermission.status=== PermissionStatus.DENIED) {
    Alert.alert(
      'Insufficient Permission!',
      'you need to grant location permissions to use this app.'
    );
    return false;
   }
   return true;
 }
 //Marking attendance from  Mark button
 async function getLocationHandler() { 
  navigation.navigate('LocationPicker');
  const hasPermission = await verifyPermission();
   if(!hasPermission){
    return;
   }
    // getting location coordinates
  const location = await getCurrentPositionAsync(); 
  setlocation({lat:location.coords.latitude,
    lng:location.coords.longitude});
 // Switch to Punch Navigation Screen
 
};
 const authCtx = useContext(AuthContext);
  authCtx.locationfetechHandler(location);


return(
       <AttendanceCard onPress={getLocationHandler}>
         Attendance
       </AttendanceCard>
)
}


export default AttendanceMark;

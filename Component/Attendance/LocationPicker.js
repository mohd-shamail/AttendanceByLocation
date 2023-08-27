import React, { useContext, useEffect , useState } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import OutlineButton from '../UI/OutlineButton';
import Map from '../Attendance/Map';
import AuthContext from '../../store/auth-context';
import AuthContextProvider from '../../store/AuthContextProvider';
import axios from 'axios';


function LocationPicker({onPress}) {

 //Date and time picker
 const day =   new Date().getDate();
 const month = new Date().getMonth()+1 ;
 const year =  new Date().getFullYear();
 const date = `${day}-${month}-${year}`;
 var hours = new Date().getHours(); //Current Hours
 var min = new Date().getMinutes(); //Current Minutes 
 var time = `${hours}: ${min}`;

  const getLocationHandler = () => {
    // const authCtx = useContext(AuthContext);
    // useEffect(()=> {
    //   async function markAttendance(date ,time) {
    //     const url = ("http://app.maazinfotech.com/HRMS2012/HRMSServices.asmx?"+Token) 
    //     const response = await axios.post(url,{
    //         date: date,
    //         time:time,
    //         in:I,
    //         returnSecureToken:true,
    //     })
    //   };
    //   markAttendance();
    // } 
    // ,[token]);
  }

  return (
    <AuthContextProvider>
    <View  style ={styles.attendance}>
      <View>
        <Text style={styles.time}>{time} </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.mapPreview}>
       <Map/>
      </View>
      <View style={styles.actions}>
        <OutlineButton icon='map'
           onPress={getLocationHandler}
        >Mark Attendance</OutlineButton>
    </View>
    </View>
    </AuthContextProvider>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  time:{
    textAlign:'center',
    fontSize:30,
    color:'#831843',
  },
  date:{
    textAlign:'center',
    fontSize:25,
    color:'#831843',
  },
  attendance:{
    marginTop:120,
  },
  mapPreview:{
     width: '90%',
     height: 250,
    marginVertical:8,
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fbcfe8',
    borderRadius:4,
    borderBottomWidth: 2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
  },
  actions: {
    marginTop:12,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  }
})

//htech786@gmail.com
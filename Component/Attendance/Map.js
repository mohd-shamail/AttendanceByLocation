import React, { useState } from 'react';
import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';



  function Map() {

    const[selectedLocation , setSelectedLocation] = useState();
    const[lat, setLatitude] = useState(28.7388287);
    const[lng, setLongitude] = useState(79.8886568);

   const region = {
        latitude: lat ,
        longitude:lng,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
        };
    function selectLocationHandler(event) {
      const lat = event.nativeEvent.coordinate.latitude;
      const lng = event.nativeEvent.coordinate.longitude;

      setSelectedLocation({lat:lat , lng: lng});
    }
           
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={region} 
      onPress={selectLocationHandler}
      >
     { selectedLocation && ( <Marker title='picked location'
       coordinate={{
        latitude:  selectedLocation.lat,
        longitude: selectedLocation.lng
        }}/>
     )}
    </MapView>
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: 348,
    height: 246,

  },
});

export default Map;
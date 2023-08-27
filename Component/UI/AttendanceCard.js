import React from 'react'
import { Pressable, StyleSheet,View,Platform,Text } from 'react-native'

const AttendanceCard = ({ children, onPress ,onNavigate }) => {
  return (
    <View style={styles.gridItem}>
    <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}
      onNavigate={onNavigate}
    >
      <View style={[styles.innerContainer, { backgroundColor: '#22d3ee' }]}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </Pressable>
  </View>
  )
}

export default AttendanceCard

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    height:150,
    width:155
  

  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
     flex: 1,
    padding: 16,
    borderRadius: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    flex:1,
    fontWeight: 'bold',
    fontSize: 23,
    textAlign:'center',
    marginTop:40
  },
});
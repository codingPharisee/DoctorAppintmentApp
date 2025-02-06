import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Appointment() {
  return (
    <View styles={styles.heading}>
      <Text style={{fontFamily:"calibri", fontWeight:"bold"}}>Appointment page</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    heading:{
      justifyContent:"center",
      alignItems:"center",
      flex:1
  
  
       
    }
    
  })

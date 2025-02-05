import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Profile() {
  return (
    <View styles={styles.heading}>
      <Text >Profile</Text>
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
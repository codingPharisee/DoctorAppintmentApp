import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import App from '../../App'
import SignInWithOAuth from '../Components/SignInWithOAuth'


export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity  onPress ={()=>console.log("image pressed")}>
    <Image  source={App}
      style={{ width: 300, height: 550, borderColor:"black" }} />
      </TouchableOpacity>

    <View style={{
      padding:20,
      marginTop:-50,
      backgroundColor:"white",
      borderRadius:5,
      

    }}><Text style={styles.heading}>Your Ultimate Doctor 👨‍⚕️ </Text>
          <Text style={styles.heading}>Appointment App</Text>
          <Text>Book Your Appointment and Start your Health Journey Today!</Text>
    </View>

    <View > 
      <SignInWithOAuth/>
    </View>

    </View>
  
  )
}
const styles = StyleSheet.create({
  heading:{
    fontSize:25,
    fontWeight:'bold',
    alignSelf:"center",
    fontfamily:"glitten"
     
  }
  
})

import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import App from '../../App'
import SignInWithOAuth from '../Components/SignInWithOAuth'


export default function Login() {
  return (
    <View style={{alignItems:'center', backgroundColor: '#F8FFE5'}}>
      <TouchableOpacity  onPress ={()=>console.log("image pressed")}>
    <Image  source={{uri:'https://media.istockphoto.com/id/1530248188/photo/senior-doctor-using-digital-tablet-walking-with-nurses-in-hospital-corridor.webp?a=1&b=1&s=612x612&w=0&k=20&c=a95e7ZQmkD85njqm5IeEMM6l9W-vcprBpxWZfOD9vXM='}}
      style={{ width: 350, height: 659, borderColor:"black" , alignItems:'center', backgroundColor:'#F8FFE5',borderRadius:18}} />
      </TouchableOpacity>

    <View style={{
      padding:20,
      marginTop:-50,
      backgroundColor:"#06D6A0",
      borderRadius:5,
      }}>
        <Text style={styles.heading}>Your Ultimate Doctor 👨‍⚕️ </Text>
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
    fontfamily:"glitten",
    
     
  }
  
})

import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import App from '../../App'
import SignInWithOAuth from '../Components/SignInWithOAuth'


export default function Login() {
  return (
    <View style={{alignItems:'center', backgroundColor: 'white'}}>
      <TouchableOpacity  onPress ={()=>console.log("image pressed")}>
    <Image  source={{uri:'https://cdn.dribbble.com/userupload/37753359/file/original-e98099cbf6dbaa40eda7e9c3e2e2d7ac.png?resize=1024x768&vertical=center'}}
      style={{ width: 350, height: 600, borderColor:"black" , alignItems:'center', backgroundColor:'#F8FFE5',borderbottomLeftRadius:18}} />
      </TouchableOpacity>

    <View style={{
      padding:50,
      paddingBottom:20,
      marginTop:-55,
      backgroundColor:"#fefeff",
      borderTopRightRadius:40,
      borderTopLeftRadius:40,
      }}>
        <Text style={styles.heading}>Your Ultimate Doctor 👨‍⚕️ </Text>
          <Text style={styles.subHeading} >Appointment App</Text>
          <Text style={{fontSize:14}}>Book Your Appointment and Start your Health Journey Today!</Text>
    </View>

    <View > 
      <SignInWithOAuth/>
    </View>

    </View>
  
  )
}
const styles = StyleSheet.create({
  heading:{
    fontSize:30,
    fontWeight:'bold',
    alignSelf:"center",
    fontfamily:"glitten",
    
     
  },
  subHeading:{
    fontSize:30,
    fontWeight:'bold',
    alignSelf:"center",
    fontfamily:"glitten",
    color:'#199671'}
  
})

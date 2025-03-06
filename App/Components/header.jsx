import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Headers() {
    const{isLoaded, isSignedIn, user} = useUser();
        if (!isLoaded||!isSignedIn){
            return null
    }
return (
    <View style={{paddingTop:25}}>
        <View style={{
            justifyContent:'space-between',
            display:"flex" ,
            flexDirection:"row",
            padding:10}}>

            <View style={{
            display:"flex" ,
            flexDirection:"row",
            gap:10,

           
            }}>
                <Image  
                source={{uri:user.imageUrl}}
                style={{width:30, height:30, borderRadius:50}}/>
                <View >
                    <Text>hello 🖐</Text>
                    <Text>{user.firstName}</Text>
                </View>
            </View>

            <View><Ionicons name="notifications" size={20} color="black" /></View>
            
        </View>
      
    </View>
  )
}

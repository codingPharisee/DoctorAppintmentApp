import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Screens/home'
import Profile from '../Screens/profile'
import Appointment from '../Screens/appointment'
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScreenStack , Stack} from 'react-native-screens'




const Tabs = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    
      
      <ScreenStack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="profile" component={Profile}
        options ={{tabBarIcon:({color,size})=>(
          <AntDesign name="profile" size={size} color={color} />
        )
        }}
        />
     
        <Stack.Screen name="home" component={Home}
         options ={{tabBarIcon:({color,size})=>(
          <AntDesign name="home" size={size} color={color} />
        )
        }}/>
        <Stack.Screen   name="appointment" component={Appointment}
        options ={{tabBarIcon:({color,size})=>(
          <AntDesign name="calendar" size={size} color={color} />
        )
        }}/>
    </ScreenStack.Navigator>
    
  )
}
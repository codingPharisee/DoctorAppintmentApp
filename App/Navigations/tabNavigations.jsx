import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Home from "../Screens/home";
import Profile from "../Screens/profile";
import Appointment from "../Screens/appointment";
import Messages from "../Screens/messages";

const Tabs = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name= "Messages" 
        component={Messages}
        options=
        {{
          tabBarIcon: ({ color,size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

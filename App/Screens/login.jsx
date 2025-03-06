import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import App from "../../App";
import SignInWithOAuth from "../Components/SignInWithOAuth";

export default function Login() {
  return (
    <View>
      <View style={{ alignItems: "center" , paddingTop:3}}>
        <TouchableOpacity onPress={() => console.log("image pressed")}>
          <Image
            source={{
              uri: "https://imgs.search.brave.com/n1p1ftb3pZ_FCWJsGJ3l5lZoWowpZcl-KjfRgmy8YFo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdmLzc5/LzU1LzdmNzk1NWE4/MWY4YTBhNzZmYjNl/YmJkYmVkNjM0Nzdj/LmpwZw",
            }}
            style={{
              paddingTop:15,
      
              width: 360,
              height: 600,
              borderColor: "black",
              alignItems: "center",
              backgroundColor: "#F8FFE5",
              borderbottomLeftRadius: 18,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            padding: 50,
            paddingBottom: 10,
            marginTop: -55,
            backgroundColor: "#fefeff",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
        >
          <Text style={styles.heading}>Your Ultimate Doctor 👨‍⚕️ </Text>
          <Text style={styles.subHeading}>Appointment App</Text>
          <Text style={{ fontSize: 14,fontWeight:'bold' }}>
            Find Available Specialists Near You and Book Your Appointment
          </Text>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight:'bold' }}>
              and Start your Health Journey Today !
            </Text>
          </View>
          
        </View>

        <View>
          <SignInWithOAuth />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    fontfamily: "glitten",
  },
  subHeading: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    fontfamily: "glitten",
    color: "#199671",
  },
});

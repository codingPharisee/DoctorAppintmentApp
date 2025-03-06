import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Header } from "@react-navigation/stack";
import Headers from "../Components/header";
import Searchbar from "../Components/searchbar";
import Slider from "../Components/slider";

export default function Home() {
  const { isLoaded, signOut } = useAuth;

  return (
    <View styles={styles.heading}>
      <Headers />
      <Text style={styles.query}>What do you feel ?</Text>
      <Searchbar />
      <Slider />
      <View>
        <Button
          style={{ alignItems: "center" }}
          title="sign out"
          onPress={() => signOut()}
        ></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    justifyContent: "center",
    alignitems: "center",
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  query: {
    fontSize:25,
    fontWeight:'bold',
    paddingLeft:10,
    paddingBottom:10,

   
  },
});

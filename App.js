import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/tabNavigations';
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded, error] = useFonts({
    'appFont-bold': require('./assets/fonts/Lora-Bold.ttf'),
    'appFont-medium': require('./assets/fonts/Lora-Medium.ttf'),
    'appFont-regular': require('./assets/fonts/Lora-Regular.ttf'),
    'appFont-semibold': require('./assets/fonts/Lora-SemiBold.ttf'),

  });
  
  return (
    
      <ClerkProvider publishableKey={"pk_test_aGVyb2ljLWJ1Y2stNzIuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
        <SafeAreaView style={{flex:1}}>
            <SignedIn>
            <NavigationContainer>
              <TabNavigation/>
            </NavigationContainer>
            </SignedIn>
            <SignedOut>
            <Login/>
            </SignedOut>
        </SafeAreaView>
      </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
    
  },
});

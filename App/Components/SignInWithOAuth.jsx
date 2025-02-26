import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useOAuth, useAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const { sessionId, isSignedIn } = useAuth();

  const handleOAuthSignIn = async () => {
    try {
      console.log('Starting OAuth flow...');
      const response = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'AppointmentApp' }),
      });

      const { createdSessionId, setActive } = response || {};

      if (createdSessionId && setActive) {
        console.log('Session created successfully:', createdSessionId);
        await setActive({ session: createdSessionId });
      } else {
        console.warn('Session not created. Response:', response);
      }
    } catch (error) {
      console.error('An error occurred during the OAuth flow:', error);
    }
  };

  return (
    <View style={styles.container}>
      
        <Button title="Sign in with Google" onPress={handleOAuthSignIn } />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
});

export default SignInWithOAuth;

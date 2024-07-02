import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screen/LoadingScreen';
import StartedScreen from './screen/StartedScreen';
import { useFonts } from 'expo-font';
import SignupScreen from './screen/SignupScreen';
import ConfirmationScreen from './screen/ConfirmationScreen';
import CreateProfileScreen from './screen/CreateProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.otf'),
    'Roboto-Light' : require('./assets/fonts/Roboto-Light.otf'),
    'SF-Pro-Text-Bold' : require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Heavy' : require('./assets/fonts/SF-Pro-Text-Heavy.otf'),
    'SF-Pro-Text-Light' : require('./assets/fonts/SF-Pro-Text-Light.otf'),
    'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.otf'),
  });


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Started" component={StartedScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
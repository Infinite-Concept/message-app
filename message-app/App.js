import { Image, StyleSheet, Text, View } from 'react-native'
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
import ChatScreen from './screen/ChatScreen';
import UpdateScreen from './screen/UpdateScreen';
import ProfileScreen from './screen/ProfileScreen';
import CallScreen from './screen/CallScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Update from "./assets/icon/update.png"
import UpdateActive from "./assets/icon/updateActive.png"
import SelectContactScreen from './screen/SelectContactScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const Home = () => {

  return(
    <Tab.Navigator initialRouteName="Chat" screenOptions={{
      tabBarLabelStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
      },
      tabBarActiveTintColor: "#4A3F69"
    }}>
        <Tab.Screen name='Chat' component={ChatScreen} 
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({focused}) => (
              <Ionicons name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} size={24} color="#4A3F69" />
            )
          }} 
        />
        <Tab.Screen name='Call' component={CallScreen} 
          options={{
            tabBarLabel: "Call",
            tabBarIcon: ({focused}) => (
              <Ionicons name={focused ? "call" : "call-outline"} size={24} color="#4A3F69" />
            )
          }} 
        />
        <Tab.Screen name='Update' component={UpdateScreen}
          options={{
            tabBarLabel: "Update",
            tabBarIcon: ({focused}) => (
              <View>
                {
                  focused ? <Image source={UpdateActive} /> : <Image source={Update} />
                }
              </View>
            )
          }} 
        />
        <Tab.Screen name='Profile' component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({focused}) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={24} color="#4A3F69" />
            )
          }} 
        />
    </Tab.Navigator>
  )
}

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.otf'),
    'Roboto-Light' : require('./assets/fonts/Roboto-Light.otf'),
    'SF-Pro-Text-Bold' : require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Heavy' : require('./assets/fonts/SF-Pro-Text-Heavy.otf'),
    'SF-Pro-Text-Light' : require('./assets/fonts/SF-Pro-Text-Light.otf'),
  });


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Started" component={StartedScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="SelectContact" component={SelectContactScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
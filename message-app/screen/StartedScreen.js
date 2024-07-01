import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Logo from "../common/assets/Logo"

const StartedScreen = ({navigation}) => {
  return (
    <View style={styles.started}>
        <StatusBar />
      <View style={styles.Imgae}>
        <Logo />
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>Simpliest</Text>
        <Text style={styles.contentText}>Video Call and</Text>
        <Text style={styles.contentText}>messaging app</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StartedScreen

const styles = StyleSheet.create({
    started: {
        flex: 1,
        backgroundColor: "#4A3F69",
    },
    Imgae: {
        width: "100%",
        left: -150,
        top: -50
    },
    content: {
        top: -150,
        paddingHorizontal: 15
    },
    contentText: {
        fontSize: 35,
        fontFamily: 'Roboto-Bold',
        color: "#FFFFFF",
        lineHeight: 50
    },
    btn: {      
      backgroundColor: "#ffffff",
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 20
    },
    btnText: {
      color: "#4A3F69",
      fontFamily: 'Roboto-Bold',
      fontSize: 16,
      textAlign: "center",
    }
})
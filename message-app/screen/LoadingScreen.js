import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Logo from "../common/assets/Logo"

const LoadingScreen = ({navigation}) => {

  useEffect(() => {
    let nav = setTimeout(() => {
      navigation.navigate("Started")
    }, 3000)

    return () =>  clearTimeout(nav)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.Imgae}>
        <Logo />
      </View>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A3F69",
    alignItems: "center",
  },
  Imgae: {
    width: "100%",
    left: -180
  }
})
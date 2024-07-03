import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Logo from "../common/assets/Logo"
import { useNavigation } from '@react-navigation/native'

const LoadingScreen = () => {

  const navigation = useNavigation()

  useEffect(() => {
    let nav = setTimeout(() => {
      navigation.navigate("Started")
    }, 3000)

    return () =>  clearTimeout(nav)
  }, [])

  const width = Dimensions.get('window').width * 1.9
  const height = Dimensions.get('window').height

  console.log(width, height);

  return (
    <View style={styles.container}>
      <View style={styles.Imgae}>
        <Logo width={width} height={height} />
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
    left: -155
  }
})
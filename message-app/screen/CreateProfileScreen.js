import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Arrow from "../common/assets/Arrow"

const CreateProfileScreen = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={{marginBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}> 
            <Arrow color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: "#4A3F69",
        position: "relative"
      },
    homeContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
        position: "relative"
    },
})
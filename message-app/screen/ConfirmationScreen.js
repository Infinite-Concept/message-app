import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Arrow from "../common/assets/Arrow"
import { useRoute, useNavigation } from '@react-navigation/native';
import { OtpInput } from 'react-native-otp-entry';

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { value } = route.params
  const [digits, setDigits] = useState("")

  const handleSubmit = async () => {

    if(digits === ""){
      Alert.alert("Input confirmation code", " *** all field is required ***")
    }else if(digits.length <= 5 ){
      Alert.alert("Input confirmation code", " *** all field is required ***")
    }else{
      try {
        navigation.navigate("CreateProfile")
      } catch (error) {
        console.error('Error registering:', error);
      }
    }

  }
  
  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={{marginBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}> 
            <Arrow color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>What's the code? </Text>
        <Text style={styles.textDesc}>We'll send you a code to verify your number</Text>
        <Text style={[styles.textDesc, {fontFamily : "Roboto-Bold"}]}>{value}</Text>
        <View style={styles.otp}>
          <OtpInput
            numberOfDigits={6}
            onFilled={(text) => setDigits(text)}
            theme={{
              pinCodeTextStyle: {color: "#fff"}
            }}
          />
        </View>

        <View style={styles.bottomtext}>
          <Text style={styles.textDesc}>Didnt recieve code?</Text>
          <TouchableOpacity >
            <Text style={[styles.textDesc, {fontFamily : "Roboto-Bold"}]}>Send Again</Text>
          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity style={styles.submit} onPress={() => handleSubmit()}>
            <View style={styles.submitButton}>
                <View style={styles.submitButtonMove}>
                    <Arrow color="#4A3F69" />
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ConfirmationScreen

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
  textTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 40,
    color: "#fff",
    lineHeight: 50
  },
  textDesc: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    color: "#ffffff",
    marginTop: 5
  },
  otp: {
    marginVertical: 22
  },
  bottomtext:{
    flexDirection: "row",
    gap: 3
  },
  submitButton: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  submitButtonMove: {
      transform: [{rotateY: "180deg"}]
  },
  submit: {
      position : "absolute",
      bottom: 20,
      right: 20
  },
})
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Arrow from "../common/assets/Arrow"
import axios from 'axios'
import PhoneInput from "react-native-phone-number-input";
// import RNPickerSelect from "react-native-picker-select"

const SignupScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const phoneInput = useRef(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={{marginBottom: 20}}>
            <Arrow />
        </View>

        <View>
            <Text style={styles.textTitle}>What's your </Text>
            <Text style={styles.textTitle}>name?</Text>
            <Text style={styles.textDesc}>We'll send you a code to verify your number</Text>
            <View style={styles.phoneNumber}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="DM"
                    layout="first"
                    onChangeText={(text) => {
                    setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    placeholder='809 5555 321'
                />
            </View>

            

        </View>
      </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: "#4A3F69",
    },
    homeContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20
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
        marginTop: 20
    },
    phoneNumber: {
        width: "100%",
        marginTop: 40
    }
})
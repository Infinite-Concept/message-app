import { StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import Arrow from "../common/assets/Arrow"
import axios from 'axios'
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();
    const phoneInput = useRef(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        Alert.alert("Number Confirmation", ` \n ${value} \n\n Is your phone number \n above correct`, [
            {
                text: "Edit",
            }, {
                text: "Yes",
                onPress: async () => {
                    setLoading(true);
                    try {
                        // const response = await axios.post('http://192.168.8.120:8765/user/register', {
                        //     phoneNumber: phoneNumber,
                        // });
                        setLoading(false);
                        navigation.navigate("Confirmation", {value})
                        
                    } catch (error) {
                        console.error('Error registering:', error);
                    }
                }
            }
        ])
    }

  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={{marginBottom: 20}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Arrow color="#fff" />
            </TouchableOpacity>
        </View>

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

        <TouchableOpacity style={styles.submit} onPress={() => handleSubmit()}>
            <View style={styles.submitButton}>
                <View style={styles.submitButtonMove}>
                    <Arrow color="#4A3F69" />
                </View>
            </View>
        </TouchableOpacity>
            
      </View>

      {loading && <View style={styles.loadingCon}><ActivityIndicator style={styles.loading} size="large" color="#0000ff" /></View>}
    </View>
  )
}

export default SignupScreen

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
        marginTop: 20
    },
    phoneNumber: {
        width: "100%",
        marginTop: 40
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
    loadingCon: {
        backgroundColor: "#00000099",
        flex: 1,
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})
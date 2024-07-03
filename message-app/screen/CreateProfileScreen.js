import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Arrow from "../common/assets/Arrow"
import imgPlaceholder from "../assets/image/img-placeholder.png"
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';

const CreateProfileScreen = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
    };

  return (
    <View style={styles.home}>
      <View style={styles.homeContainer}>
        <View style={{marginBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}> 
            <Arrow color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>Edit your Profile </Text>
        <Text style={styles.textDesc}>Enter your name and add profile picture</Text>
        <View style={styles.insertHome}>
            <TouchableWithoutFeedback style={styles.profilePicCon} onPress={pickImage}>
                {
                    image ? <Image source={{uri: image}} style={styles.profilePic} /> : 
                    <Image source={imgPlaceholder} style={styles.profilePic} />
                }
            </TouchableWithoutFeedback>

            <TextInput placeholder='Enter your name' style={styles.TextInput} placeholderTextColor="#fff" />
        </View>

      </View>

      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate("Home")}>
        <View style={styles.submitButton}>
          <View style={styles.submitButtonMove}>
              <Arrow color="#4A3F69" />
          </View>
        </View>
      </TouchableOpacity>

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
    profilePicCon: {
        marginTop: 30
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 200,
    },
    TextInput: {
        borderColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        paddingVertical: 7,
        paddingHorizontal: 10,
        color: "#fff",   
    },
    insertHome: {
        marginVertical: 20,
        gap: 30
    }

})
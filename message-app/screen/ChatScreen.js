import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Write from "../common/assets/Write"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import img1 from "../assets/image/img1.png"
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.home}>
      <ScrollView style={styles.homeContainer}>

      <View style={styles.filter}>
        <TouchableWithoutFeedback style={styles.filterBtnCon}>
          <Text style={styles.filterBtn}>All</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback style={styles.filterBtnCon}>
          <Text style={styles.filterBtn}>Unread</Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback style={styles.filterBtnCon}>
          <Text style={styles.filterBtn}>Groups</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.archivedCon}>
        <View style={styles.archivedConIn}>
          <MaterialCommunityIcons name="archive-arrow-down-outline" size={24} color="#4A3F69" />
          <Text style={styles.archivedConInText}>Archived</Text>
        </View>

        <Text>1</Text>
      </View>

      <View style={styles.chatMessages}>
        <View style={styles.messages}>
          <View style={styles.messagesImageCon}>
            <Image source={img1} style={styles.messagesImage}/>
          </View>

          <View style={styles.messagesTextCon}>
            <Text style={styles.messagesText1}>Cameron Williamson</Text>
            <Text style={styles.messagesText2}>omg, this is amazing</Text>
          </View>

          <View style={styles.messagesDetails}>
            <Text style={styles.messagesText3}>10:30</Text>
            <View style={styles.messagesText4Con}>
              <Text style={styles.messagesText4}>1</Text>
            </View>
          </View>
        </View>
      </View>

      </ScrollView>

      <TouchableOpacity style={styles.submit} activeOpacity={0.8} onPress={() => navigation.navigate("SelectContact")} >
        <View style={styles.submitButton}>
          <Write />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#fff"
  },
  homeContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  submitButton: {
    backgroundColor: "#4A3F69",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  submit: {
    position : "absolute",
    bottom: 15,
    right: 15
  },
  filter: {
    flexDirection: "row",
    gap: 15
  },
  filterBtn: {
    backgroundColor: "#4A3F69",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: "#fff",
    fontFamily: 'Roboto-Bold',
    fontSize: 14
  },
  archivedCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  },
  archivedConIn: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  archivedConInText: {
    fontFamily: 'Roboto-Bold',
    color: "#4A3F69",
    fontSize: 16
  },
  chatMessages: {
    paddingVertical: 20
  },
  messages: {
    borderBottomColor: "#4A3F6980",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative"
  },
  messagesImageCon: {
    position: "absolute"
  },
  messagesImage: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  messagesTextCon: {
    position: "relative",
    left: 65
  },
  messagesText1: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textTransform: "capitalize"
  },
  messagesText2: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
  },
  messagesText3: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    color: "#DD1B49"
  },
  messagesText4Con: {
    backgroundColor: "#DD1B49",
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  messagesText4: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    color: "#fff",
    
  },
  messagesDetails: {
    gap: 7
  }
})
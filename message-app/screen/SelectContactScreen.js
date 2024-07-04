import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Arrow from "../common/assets/Arrow"
import Search from "../common/assets/Search"
import User from "../common/assets/User"
import UserGroup from "../common/assets/UserGroup"
import * as Contacts from 'expo-contacts';
import { useNavigation } from '@react-navigation/native';

const SelectContactScreen = () => {
  const navigation = useNavigation()
  const [contacts, setContacts] = useState([]);
  const [whatsappContacts, setWhatsappContacts] = useState([]);
  const [nonWhatsappContacts, setNonWhatsappContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted'){
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if(data.length >  0){
        const phoneNumbers = data.map(contact =>
          contact.phoneNumbers.map(phone => phone.number.replace(/[^0-9]/g, ''))
        ).flat();

        console.log(phoneNumbers);
      }
    }
  }

  const addContact = async () => {   
  };

  return (
    <View style={styles.select}>
      
      <View style={styles.navigateCon}>
        <View style={styles.navigate}>
          <TouchableOpacity style={styles.Arrow} activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Arrow color="#4A3F69" />
          </TouchableOpacity>

          <View style={styles.navigateDetails}>
            <Text style={styles.navigateDetailsText1}>Select contact</Text>
            <Text style={styles.navigateDetailsText2}>38 contacts</Text>
          </View>
        </View>

        <View style={styles.options}>
          <Search />

          <View style={styles.dotCon}>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
          </View>
        </View>
      </View>

      <View style={styles.selectCon}>
        <View style={styles.addNewCon}>
          <View style={styles.addNew}>
            <View style={styles.addNewIcon}>
              <UserGroup />
            </View>
            <Text style={styles.addNewText}>New group</Text>
          </View>

          <TouchableOpacity style={styles.addNew} onPress={addContact}>
            <View style={styles.addNewIcon}>
              <User />
            </View>
            <Text style={styles.addNewText}>New contact</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.listContact}>
          <Text style={[styles.navigateDetailsText2, {fontSize: 14}]}>Contacts on TextApp</Text>

          <FlatList
            data={whatsappContacts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text>{item.name}</Text> // Display WhatsApp contact details as needed
            )}
          />

          <Text>Non-WhatsApp Contacts:</Text>
          <FlatList
            data={nonWhatsappContacts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text>{item.name}</Text> // Display non-WhatsApp contact details as needed
            )}
          />
        </View>

      </View>
    </View>
  )
}

export default SelectContactScreen

const styles = StyleSheet.create({
  select: {
    flex: 1,
    backgroundColor: "#fff"
  },
  selectCon: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  navigateCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#00080",
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  navigate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  navigateDetails: {
    gap: 2
  },
  navigateDetailsText1: {
    fontFamily: 'Roboto-Bold',
    color: "#4A3F69",
    fontSize: 14
  },
  navigateDetailsText2: {
    fontFamily: 'Roboto-Light',
    color: "#4A3F69",
    fontSize: 12
  },
  options: {
    flexDirection: "row",
    gap: 13,
    alignItems: "center"
  },
  dotCon: {
    gap: 3
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#4A3F69",
    borderRadius: 50
  },
  addNewCon: {
    gap: 20
  },
  addNew: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center"
  },
  addNewIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4A3F69"
  },
  addNewText: {
    fontFamily: 'Roboto-Bold',
    color: "#4A3F69",
    fontSize: 16
  },
  listContact: {
    paddingVertical: 10
  }
})
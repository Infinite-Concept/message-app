import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.home}>
      <ScrollView style={styles.container}>
        <View>
          <View>
            <View>
              <Image />
            </View>

            <View>
              <Text>Matt</Text>
              <Text>Hey there! I am using WhatsApp</Text>
            </View>

            <View>

            </View>
          </View>

          <View>
            <View>
              <Image />
              <Text>Avatar</Text>
            </View>
            <View>

            </View>
          </View>
        </View>

        <View>

          <View>
            <View>
              <Image />
            </View>
          </View>


        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
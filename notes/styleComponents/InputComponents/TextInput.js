import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState} from 'react'

export default function TextInput1() {
    const [name, setName] = useState('')
  return (
    <View>
      <TextInput
        // maxLength={5}
        // clearbuttonMode only for iOS
        secureTextEntry={true}
        keyboardType='numeric'
        placeholder='Name'
        style={styles.txt}
        onChangeText={(name) => setName(name)}
      />
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txt: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})
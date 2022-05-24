import { StyleSheet, Text } from 'react-native'
import React from 'react'

const AppText = (props) => {
  return (
      <Text style={styles.text} >{props.children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Roboto'
    }
})
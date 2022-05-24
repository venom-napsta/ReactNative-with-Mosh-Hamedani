import { Text, StyleSheet, Platform } from 'react-native'
import React from 'react'


// const AppText = (props) => {
const AppText = ({children, style }) => {
  return (
      // <Text>{props.children}</Text>
      <Text style={[styles.text, style]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
      // marginBottom: 100
      color: 'red'
    }
  })
  export default AppText
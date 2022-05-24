import { StyleSheet, Text } from 'react-native'
import React from 'react'

const AppText = (props) => {
    // const AppText = ({children}) => {
  return (
      <Text style={styles.text} >{props.children}</Text>
    //   <Text>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'dodgerblue',
        fontFamily: 'Avenir'
    }
})
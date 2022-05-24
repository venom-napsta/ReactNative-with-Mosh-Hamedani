import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from './screenComponents/Screen'

const LoginScreen = () => {
  return (
    <Screen 
        style={styles.logo}
        source={require("../../assets/icons/calories.png")}
    />
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo:{
        width:80,
        height: 80,
        alignSelf:'center',
        marginBottom:20,
        marginTop:50
    }
})
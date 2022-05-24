import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style} //style={style} and apply <--
      >{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})
export default Screen

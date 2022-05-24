// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform, StatusBar, View, Dimensions } from 'react-native';

export default function App() {
  console.log("Hello React Log");
  console.log("Dimensions", Dimensions.get("screen") );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%'
      }} />
        {/* <Text>Hello</Text>
      </View>
      <View style={{
        backgroundColor: 'white',
        width: '100%',
        height: '0.1%'
      }} />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70
      }} >
        <Text>Hello</Text>
      </View> */}
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1, // grows and takes the entire screen
    backgroundColor: '#101010',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});

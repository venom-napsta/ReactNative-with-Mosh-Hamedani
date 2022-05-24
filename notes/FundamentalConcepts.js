// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, Alert,Platform, Button, StatusBar, TouchableOpacity, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';

export default function App() {
  let x = 1
  console.log("Hello React Log");
  const textClicked = () => {
    console.log("Text Clicked")
  }
  return (
    <View style={styles.container}>
      <Text numberOfLines={5} onPress={textClicked} >
        Hello Expo my Old Friend!
        Get used to learning the basics so that the hard concepts are easy to master. Just joking this is just a long text to use numberOfLines property
      </Text>
      <TouchableOpacity onPress={() => console.log("Image Tagged")} >
        <Image
          width={200}
          height={200}
          fadeDuration={1000}
          blurRadius={2}
          source={require('./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png')} />
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={() => console.log("Image Tagged")} >
        <View style={{ width: 200, height: 70, backgroundColor:"gray" }}>
          <Text>Hello Droid</Text>
        </View>
      </TouchableNativeFeedback>
      <Button 
        title="Alert Button"
        color="orange"
        onPress={() => Alert.alert("Title of Alert", "Button Clicked",[
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")}
        ])}
      />
      {/* <Button 
        title="Prompt Button"
        color="green"
        onPress={() => Alert.prompt("Title of Prompt", "Button Clicked", (text) => console.log(text) )}
      /> */}
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1, // grows and takes the entire screen
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});

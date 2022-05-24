// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../../app/screens/screenComponents/Screen';
// import AppCard from './app/screens/Card/AppCard';
// import ListingDetailsComponent from './app/screens/ListingDetailsComponent';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import Exercise1 from './notes/Exercise1';
// import Styling from './notes/Styling';
import MessagesScreen from './MessagesScreen';

export default function App() {
  console.log("Reloaded", Date());
  return (
    <Screen>
      <View >
        <MessagesScreen />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // grows and takes the entire screen
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // for iOS use the safeAreaView from react Native
    // or simply use 'paddingTop: Constants.statusBarHeight'
  },
});

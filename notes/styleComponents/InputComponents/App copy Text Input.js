// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListingsScreen from '../../../app/screens/ListingsScreen';
import Screen from '../../../app/screens/screenComponents/Screen';
import AppTextInput from './AppTextInput';

// import TextInput1 from './notes/styleComponents/InputComponents/TextInput';
// import AppCard from './app/screens/Card/AppCard';
// import ListingDetailsComponent from './app/screens/ListingDetailsComponent';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import Exercise1 from './notes/Exercise1';
// import Styling from './notes/Styling';
// import MessagesScreen from './notes/Lists/MessagesScreen';
// import Screen from './app/screens/screenComponents/Screen';
// import Icon from './app/screens/Icon';
// import IconApp from './app/screens/IconApp';
// import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  console.log("Reloaded", Date());
  return (
        <Screen style={styles.screen}>
          <AppTextInput placeholder='username' icon='email' />
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

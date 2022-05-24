// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../../../app/screens/screenComponents/Screen';
import AppPicker from './AppPicker';
import AppTextInput from './AppTextInput';

// import ListingsScreen from './app/screens/ListingsScreen';
// import AppTextInput from './notes/styleComponents/InputComponents/AppTextInput';
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
// import SwitchInput from './notes/styleComponents/InputComponents/SwitchInput';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 }
]
export default function App() {
  console.log("Reloaded", Date());


  const [category, setCategory] = useState(categories[0])
  return (
    <Screen style={styles.screen}>
      <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} icon='apps' placeholder='Category' />
      <AppTextInput icon='email' placeholder='Email' />
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

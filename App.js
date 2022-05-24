// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  console.log("Reloaded", Date());

  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

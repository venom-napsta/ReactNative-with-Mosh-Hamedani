import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText2 from '../OrganizingStyles'

const PickerItem = ({ label, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress} >
        <AppText2 style={styles.text}>{label}</AppText2>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

export default PickerItem
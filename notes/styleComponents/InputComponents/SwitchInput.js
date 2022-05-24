import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import Screen from '../../../app/screens/screenComponents/Screen'

export default function SwitchInput() {
  const [isNew, setIsNew] = useState(false)
  return (
    <Screen>
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    </Screen>
  )
}

const styles = StyleSheet.create({})
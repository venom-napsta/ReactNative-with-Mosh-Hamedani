import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import colors from '../../../app/config/colors'
import defaultStyles from '../../../app/config/DefaultStyles'

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />}
      <TextInput style={defaultStyles.text} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightgray,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    }, 
    icon: {
        marginRight:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
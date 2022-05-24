import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../app/config/colors'

const AppButton = ({title, onPress, color = 'primary'}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={() => console.log('Log in')} >
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',  
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 8
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

})
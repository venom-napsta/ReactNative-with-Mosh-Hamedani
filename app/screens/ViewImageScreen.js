import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' size={35} color='white' />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color='white' />
            </View>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../assets/images/great_food.png')}
            />
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    closeIcon: {
        // width:50,
        // height:50,
        // backgroundColor: '#fc5c65',
        // instead replace with professionalism MF
        // backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: '#111',
        flex: 1
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
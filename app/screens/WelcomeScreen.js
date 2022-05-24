import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import AppButton from '../../notes/styleComponents/ButtonComponent'

export default function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.backgound}
            source={require('../../assets/images/favourite_food.png')}>
            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require('../../assets/icons/google.png')} />
                <Text style={styles.tagline} >Sell What you dont Need</Text>
            </View>
            <View style={styles.buttonsContainer} >
                <AppButton  title='Login' />
                <AppButton  title='Register' color='secondary' />
            </View>            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgound: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        padding: 10,
        width: '100%'
    }, 
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 10,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '500',
        paddingVertical: 20, 
    }
    // registerButton: {
        // width: '100%',
        // height: 70,
        // backgroundColor: 'orange'
    // },
})
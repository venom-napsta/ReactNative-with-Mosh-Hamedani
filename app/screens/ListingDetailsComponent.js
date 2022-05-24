import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import colors from '../config/colors'
import AppText2 from '../../notes/styleComponents/OrganizingStyles'
import ListItem from './screenComponents/ListItem'

export default class ListingDetailsComponent extends Component {
    render() {
        return (
            <View>
                <Image style={styles.image} source={require('../../assets/images/jacket.jpg')} />
                <View style={styles.detailsContainer}>
                    <AppText2 style={styles.title}>Red jacket for sale</AppText2>
                    <AppText2 style={styles.price}>$100</AppText2>
                    <View style={styles.userContainer}>
                        <ListItem
                            // style={styles.ListItem}
                            image={require('../../assets/images/mosh.jpg')}
                            title='Napsta Kid'
                            subTitle='4 Listings'
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    }
    ,
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 30
    }
})
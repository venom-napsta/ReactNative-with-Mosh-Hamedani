import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'

import Screen from './screenComponents/Screen'
import MoshCard from './Card/MoshCard'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../../assets/images/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 3000,
        image: require('../../assets/images/couch.jpg')
    }
]
export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) =>
                    <MoshCard
                        style={styles.subTitle}
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10, // horizontalPadding not supported on iOS so goto Screen.js::6
        backgroundColor: colors.lightgray
    }
})
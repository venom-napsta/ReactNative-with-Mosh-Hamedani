import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../../app/config/colors'

export default function ListItemSeparator() {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.lightgray,
    }
})
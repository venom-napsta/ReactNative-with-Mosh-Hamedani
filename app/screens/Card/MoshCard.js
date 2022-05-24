import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import ApppText2 from '../../../notes/styleComponents/OrganizingStyles/AppText2'

const MoshCard = ({ title, subTitle, image, style }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <ApppText2 style={styles.title}>{title}</ApppText2>
                <ApppText2 style={styles.subTitle}>{subTitle}</ApppText2>
            </View>
        </View>
    )
}

export default MoshCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
        // fontSize:100
    }
})
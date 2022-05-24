import { StyleSheet, TouchableHighlight, View, Image } from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText2 from '../../../notes/styleComponents/OrganizingStyles'
import colors from '../../config/colors'

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightgray}
                onPress={onPress}>
                <View style={styles.container} >
                    {IconComponent}
                    {image && <Image style={styles.pic} source={image} />}
                    <View style={styles.insideContainer}>
                        <AppText2 style={styles.title}>{title}</AppText2>
                        {subTitle && <AppText2 style={styles.subTitle}>{subTitle}</AppText2>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    insideContainer: {
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    pic: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    }
})
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../../app/config/DefaultStyles'
import AppText2 from '../OrganizingStyles'
import Screen from '../../../app/screens/screenComponents/Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />}
                    <AppText2 style={styles.text} >{selectedItem ? selectedItem.label : placeholder}</AppText2>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide' >
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        // render items ie categories and event handling
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => <PickerItem label={item.label} onPress={() => {
                            setModalVisible(false)
                            onSelectItem(item)
                        }} /> }
                    />
                </Screen>
            </Modal>
        </>
    )
}

export default AppPicker


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
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1
    }
})
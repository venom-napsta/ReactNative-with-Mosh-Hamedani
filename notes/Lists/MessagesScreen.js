import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ListItem from '../../app/screens/screenComponents/ListItem'
import ListItemSeparator from './ListItemSeparator'
import ListItemDeleteAction from './ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/images/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/images/mosh.jpg')
    }
]
export default function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        // del msg selected
        // const newMessages = messages.filter(m => m.id !== message.id)
        // setMessages(newMessages)

        //or simply
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()} // unique id
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    // Logic for handling selections
                    // using props :: f()nal components
                    onPress={() => console.log('List Item Selected', item.id)}
                    renderRightActions={() =>
                        <ListItemDeleteAction
                            onPress={() => handleDelete(item)}
                        />}
                />}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../../assets/images/mosh.jpg')
                    }
                ])
            }}
        />
    )
}

const styles = StyleSheet.create({})
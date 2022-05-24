import { View, Text } from 'react-native'
import React from 'react'

export default function Flexbox() {
    return (
        <View style={{
            backgroundColor: '#fff',
            flex: 1,
            flexDirection: "row",   //horizontal
            // row, row-reverse, column, column-reverse  
            // main access is the horizontal axis ie row
            justifyContent: "center" ,    // main
            alignItems: "center",    // secondary // aligns items in each line
            alignContent: "center",
            flexWrap: "wrap"
        }} >
            <View style={{
                backgroundColor: 'dodgerblue',
                width:100,
                height:300
            }} >
                <Text>Flexbox1</Text>
            </View>
            <View style={{
                backgroundColor: 'green',
                width:100,
                height:200,
                alignSelf: "flex-end"  
                // asigned to a self item as compared to the whole wrapper.
            }}>
                <Text>Flexbonnx2</Text>
            </View>
            <View style={{
                backgroundColor: 'orange',
                width:100,
                height:100
            }}>
                <Text>Flexbox3</Text>
            </View>
            <View style={{
                backgroundColor: 'gray',
                width:100,
                height:100
            }}>
                <Text>Flexbox4</Text>
            </View>
            <View style={{
                backgroundColor: 'greenyellow',
                width:100,
                height:100
            }}>
                <Text>Flexbox5</Text>
            </View>
        </View>
    )
}
import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Exercise2() {
    return (
        <View style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: "column",
            justifyContent: 'center'
        }} >
            <View style={{
                backgroundColor: '#101010',
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    position: 'relative',
                    left:20,
                    bottom:20,
                    marginTop:30,
                    width: 50,
                    height: 50,
                    backgroundColor: 'tomato',
                }} >
                    <Text>left</Text>
                </View>
                <View style={{
                    position: 'relative',
                    right:20,
                    bottom:20,
                    marginTop:30,
                    width: 50,
                    height: 50,                    
                    backgroundColor: 'skyblue',
                }} >
                    <Text>right</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: 'gray',
                flex: 8
            }}>
                <Image
                    style={{
                        width: '90%',
                        height: '90%',
                        top:'2%',
                        alignSelf: 'center'
                    }}
                    source={require('../assets/images/great_food.png')}
                />
            </View>
            <View style={{
                backgroundColor: '#101010',
                flex: 2
            }} />
        </View>
    )
}
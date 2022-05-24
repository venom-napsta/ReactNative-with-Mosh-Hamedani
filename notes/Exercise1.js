import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Exercise1() {
    return (
        <View style={{
            backgroundColor: '#fff',
            flex: 1,
            flexDirection: "column",
            justifyContent: 'center'
        }} >
            <View style={{
                backgroundColor: '#101010',
                // justifyContent: 'center',
                flex: 8,
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    fadeDuration={1000}
                    source={require('../assets/images/background_01.png')}
                />
                <View
                    style={{
                        position: 'absolute',
                        top: '20%',
                        width: '50%',
                        height: '50%',
                    }}
                 >
                    <Image
                        style={{
                            width: '50%',
                            height: '50%',
                        }}
                        source={require('../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png')}
                    />
                    <Text>Sell What you dont Need</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: 'gray',
                flex: 1
            }}>
                <Text>Flexbox4</Text>
            </View>
            <View style={{
                backgroundColor: 'greenyellow',
                flex: 1
            }}>
                <Text>Flexbox5</Text>
            </View>
        </View>
    )
}
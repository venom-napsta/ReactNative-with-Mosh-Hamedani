import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../../../assets/images/jacket.jpg')}
      />
      <View style={styles.textContainer}>
        <Text>Red Jacket for sale</Text>
        <Text style={{marginTop: 15, color:'green'}}>$100</Text>
      </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  textContainer: {
    padding: 30,
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MoshCard from './MoshCard' 
// import CardComponent from './CardComponent'

const AppCard = () => {
  return (
    // <CardComponent />
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100
    }}
    >
      <MoshCard
        title='Red Jacket for sale'
        subTitle='$100'
        image={require('../../../assets/images/jacket.jpg')} />
    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({
  //
})
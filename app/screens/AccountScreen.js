import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Screen from './screenComponents/Screen'
import ListItem from './screenComponents/ListItem'
import colors from '../config/colors'
import Icon from './screenComponents/Icon'
import ListItemSeparator from '../../notes/Lists/ListItemSeparator'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]
export default function AccountScreen() {
  return (
    <Screen style={styles.screen} >

      {/* first list */}
      <View style={styles.container}>
        <ListItem title='venom napsta' subTitle='napstakid@gmail.com' image={require('../../assets/images/venom/V.png')} />
      </View>

      {/* middle list */}
      <View style={styles.subContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />
      </View>

      {/* Logout: last list */}
          <ListItem
            title='Logout'
            IconComponent={
              <Icon name='logout' backgroundColor='red' />
            }
            />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgray,

  },
  container: {
    marginVertical: 20
  }
})
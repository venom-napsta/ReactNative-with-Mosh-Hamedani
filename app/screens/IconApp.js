// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Screen from './screenComponents/Screen';
import Icon from './screenComponents/Icon';
import ListItem from './screenComponents/ListItem';

export default function IconApp() {
  return (
    <Screen>
      <ListItem
        title='My title'
        // subTitle='Mysub'
        ImageComponent={<Icon name='email' />} />
    </Screen>
  );
}

// default parameters
// <Icon name='email' size={100} backgroundColor='red' iconColor='white' />


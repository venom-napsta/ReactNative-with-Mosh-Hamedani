import React from 'react'
import { Text } from 'react-native'
import DefaultStyles from '../../../app/config/DefaultStyles'
// import styles from './styles'

const AppText2 = ({children, style}) => {
  return (
      <Text style={[DefaultStyles.text, style]} >{children}</Text>
  )
}
 
export default AppText2

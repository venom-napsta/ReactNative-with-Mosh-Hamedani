import { StyleSheet, Platform } from 'react-native'
import colors from '../../../app/config/colors'

const styles = StyleSheet.create({
    colors: colors,
    //styles to be exported
    text: {
        // fontSize: 24,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    },
})

export default styles
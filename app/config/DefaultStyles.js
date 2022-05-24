import { Platform } from 'react-native'
import colors from './colors'

export default {
    colors, // colors:colors
    text: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
}
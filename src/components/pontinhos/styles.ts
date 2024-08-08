import {StyleSheet} from 'react-native'
import {colors} from '../../styles/globalstyle'

export const styles = StyleSheet.create({ 
    colorido: {
        width: 30,
        height: 30,
        borderWidth: 5,
        borderColor: colors.white,
        backgroundColor: colors.roxo,
        borderRadius: 100,
        margin: 10,
    },
    branco: {
        width: 30,
        height: 30,
        borderWidth: 5,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderRadius: 100,
        margin: 10,
    }
})
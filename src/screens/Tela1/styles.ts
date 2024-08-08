import {StyleSheet} from 'react-native'
import {colors} from '../../styles/globalstyle'

export const styles = StyleSheet.create({   
    header: {
        padding: 40,
    },
    titulo: {
        height: 45,
        width: 'auto',
    },
    h3: {
        color: colors.white,
        fontSize: 45,
        padding: 20,
        textAlign: 'center',
    },
    img: {
        padding: 10,
    },
    botao: {
        padding: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 20,
    },
    txt: {
        color: colors.roxo,
        fontSize: 30,
    },
})
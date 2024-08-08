import {StyleSheet} from 'react-native'
import {colors} from '../../styles/globalstyle'

export const styles = StyleSheet.create({   
    h2: {
        color: colors.white,
        fontSize: 60,
        textAlign: 'center',
        padding: 20,
    },
    fim: {
        padding: 20,
    },
    bot: {
        padding: 20,
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 20,
    },
    entrar: {
        backgroundColor: 'none',
    },
    com: {
        color: colors.roxo,
        fontSize: 30,
    },
    img: {
        padding: 10,
        height: 30,
        width: 40,
    },
    txt: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub: {
        fontSize: 25,
        color: colors.white,
        textDecorationLine: 'underline',
    },
    log: {
        fontSize: 20,
        color: colors.white,
    }
})
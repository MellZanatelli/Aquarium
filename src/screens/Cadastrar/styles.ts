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
    formRow:{

    },
    icon: {

    },
    input: {

    },
    firula: {

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
    },
    entrar: {
        backgroundColor: 'none',
    },
})
import {StyleSheet} from 'react-native'
import {colors} from '../../styles/globalstyle'

export const styles = StyleSheet.create({   
    header: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gotas: {
        padding: 30,
        height: 80,
        width: 'auto',
    },
    bemv: {
        fontFamily: 'TheNautigal_700Bold',
        color: colors.white,
        fontSize: 70,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    formRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 5,
        opacity: 0.8,
        padding: 10,
    },
    icon: {
        fontSize: 30,
        color: colors.roxo,
        paddingHorizontal: 8,
    },
    input: {
        width: 250,
    },
    firula: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
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
    bots: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    kav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '50%'
    }
})
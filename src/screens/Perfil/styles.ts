import {StyleSheet} from 'react-native'
import {colors} from '../../styles/globalstyle'

export const styles = StyleSheet.create({
    name: {
        fontFamily: 'TheNautigal_700Bold',
        color: colors.white,
        fontSize: 70,
        paddingHorizontal: 10,
    },
    confira: {
        color: colors.white,
        fontSize: 30,
        textAlign: 'center',
    },
    noticias: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    noticia: {
        backgroundColor: colors.amarelo,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: colors.roxo,
    },
    gotas: {
        padding: 30,
        height: 80,
        width: 'auto',
    },
    txt: {
        color: colors.black,

    }
})
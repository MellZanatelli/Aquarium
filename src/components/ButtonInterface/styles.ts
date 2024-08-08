import { StyleSheet } from 'react-native'
import { colors } from '../../styles/globalstyle'

export const styles = StyleSheet.create({

    buttonPrimary: {
        backgroundColor: colors.white,
        borderRadius: 5,
        margin: 10,
    },

    buttonSecondary: {
        backgroundColor: colors.roxo,
        borderRadius: 5,
        margin: 10,
        borderColor: colors.white,
        borderWidth: 2,
    },

    buttonThird: {
        backgroundColor: colors.black,
        borderRadius: 5,
        margin: 10,
    },

    textPrimary: {
        color: colors.roxo,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center",
    },

    textSecondary: {
        color: colors.white,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center",
    },

    textThird: {
        color: colors.black,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center",
    },

})
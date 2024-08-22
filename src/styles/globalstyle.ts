import { StyleSheet } from "react-native"

export const colors = {
    black: '#000',
    white: '#FFFF',
    roxo: '#2E2454',
    vermelho: '#DE312B',
    amarelo: '#FFE9CA'
}

export const Scontainer = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export const Pontos = StyleSheet.create({
    pontos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    }
})


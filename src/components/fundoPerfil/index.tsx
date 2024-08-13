import React from "react"
import { ImageBackground, View } from "react-native"
import { styles } from "./styles"
import {Scontainer} from '../../styles/globalstyle'

interface Fund {
    children: React.ReactNode
}

export function FundoPer({children}:Fund) {
    const mar = require('../../assets/fundo-desenho.png')

    return(
        <View style={styles.fundo}>
            <ImageBackground style={Scontainer.container} source={mar}>
                {children}
            </ImageBackground>
        </View>
    )
}
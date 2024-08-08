import React from "react"
import { View, Text, Button, TouchableOpacity, Image, Linking } from "react-native"
import { styles } from "./styles"
import { Fundo } from '../../components/fundo'
import { Scontainer } from '../../styles/globalstyle'
import { Cadastrar } from "../Cadastrar"
import { MenuStackTypes } from "../../navigation/Login.navigation"
import { Pontinhos } from '../../components/pontinhos'
import { Pontos } from '../../styles/globalstyle'
import { Page } from '../../../App'

export function Tela4({ navigation }: MenuStackTypes, { setPagina }: Page) {

    const bolhas = require('../../assets/bolhas.png')

    return (
        <Fundo>
            <View style={Scontainer.container}>
                <View style={styles.fim}>
                    <Text style={styles.h2}>
                        Tenha seu próprio mundinho dentro d’água, para amar e relaxar!
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push("Cadastrar")} style={styles.bot}>
                    <Text style={styles.com}>Começar </Text>
                    <Image style={styles.img} source={require('../../assets/seta.png')} />
                </TouchableOpacity>
                <View style={styles.txt}>
                    <Text style={styles.log}>Já tem uma conta?</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push("Login")} style={styles.entrar}>
                        <Text style={styles.sub}>Clique aqui para entrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Pontos.pontos}>
                <Pontinhos onPressP={() => setPagina(1)} cor={false} />
                <Pontinhos onPressP={() => setPagina(2)} cor={false} />
                <Pontinhos onPressP={() => setPagina(3)} cor={false} />
                <Pontinhos onPressP={() => setPagina(4)} cor={true} />
            </View>
        </Fundo >
    )
}
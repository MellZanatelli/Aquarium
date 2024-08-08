import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoLog } from '../../components/fundoLogin';
import { Zocial, Fontisto } from '@expo/vector-icons';
import { styles } from "./styles";
import { Scontainer, colors } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { ButtonInterface } from '../../components/ButtonInterface';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Cadastrar({ navigation }: MenuStackTypes) {
    const [data, setData] = useState<IRegister>(); //Preenche dados
    async function handleRegister() {
        if (data?.email && data.name && data.password) { // poupa o if data para saber se tá preenchido
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos antes de continuar.")
        }
    }
    function handleGoBack() {
        navigation.navigate('TelaInicial')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    return (
        <FundoLog>
            <View style={Scontainer.container}>
                <View style={styles.header}>
                    <Text style={styles.h3}>
                        Crie sua conta
                    </Text>
                    <View style={styles.firula}>
                        <Image style={styles.titulo} source={require('../../assets/Aquarium.png')} />
                        <Text>gratuitamente</Text>
                        <Image style={styles.titulo} source={require('../../assets/Aquarium.png')} />
                    </View>
                </View>
                <Text style={styles.h3}>
                    Preencha corretamente com suas informações!
                </Text>
                <KeyboardAvoidingView>
                    <View style={styles.formRow}>
                        <Zocial name="email" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.roxo}
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i })}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Fontisto name="locked" style={styles.icon} />
                        <TextInput
                            placeholderTextColor={colors.roxo}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i })}
                        />
                    </View>
                    <ButtonInterface title='Voltar' type='primary' onPressI={handleGoBack} />
                    <ButtonInterface title='Entrar' type='secondary' onPressI={handleRegister} />
                </KeyboardAvoidingView>
                <View style={styles.txt}>
                    <Text style={styles.log}>Já tem uma conta?</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push("Login")} style={styles.entrar}>
                        <Text style={styles.sub}>Clique aqui para entrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </FundoLog>
    )
}
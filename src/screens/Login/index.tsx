import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoLog } from '../../components/fundoLogin';
import { Zocial, Fontisto } from '@expo/vector-icons';
import { styles } from "./styles";
import { Scontainer, colors } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { ButtonInterface } from '../../components/ButtonInterface';

export interface IAutenticar {
    email?: string;
    password?: string;
}

export function Login({ navigation }: MenuStackTypes) {

    const [data, setData] = useState<IAutenticar>(); //Preenche dados

    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
    }

    function handleRegister() {
        navigation.navigate("Cadastrar")
    }

    function handleChange(item: IAutenticar) {
        setData({ ...data, ...item });
    }

    function handleGoBack() {
        navigation.navigate('TelaInicial')
    }

    return (
        <FundoLog>
            <View style={Scontainer.container}>
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
                    <Text style={styles.log}>Não tem uma conta?</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push("Login")} style={styles.entrar}>
                        <Text style={styles.sub}>Clique aqui para se cadastrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </FundoLog>
    );
}
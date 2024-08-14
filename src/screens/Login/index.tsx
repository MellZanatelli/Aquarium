import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoLog } from '../../components/fundoLogin';
import { Zocial, Fontisto } from '@expo/vector-icons';
import { styles } from "./styles";
import { Scontainer, colors } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { ButtonInterface } from '../../components/ButtonInterface';
import { useAuth } from '../../hook/auth';
import { AxiosError } from 'axios';

export interface IAutenticar {
    email?: string;
    password?: string;
}

export function Login({ navigation }: MenuStackTypes) {

    const [data, setData] = useState<IAutenticar>(); //Preenche dado
    const { signIn, setLoading } = useAuth()

    async function handleSignIn() {
        if (data?.email && data.password) {
            setLoading(true)
            try {
                await signIn(data)
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
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
                <View style={styles.header}>
                    <View style={styles.firula}>
                        <Image style={styles.gotas} source={require('../../assets/splashE.png')} />
                        <Text style={styles.bemv}>Bem-vindo de volta!</Text>
                        <Image style={styles.gotas} source={require('../../assets/splashD.png')} />
                    </View>
                </View>
                <KeyboardAvoidingView style={styles.kav}>
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
                    <View style={styles.bots}>
                        <ButtonInterface title='Voltar' type='primary' onPressI={handleGoBack} />
                        <ButtonInterface title='Entrar' type='secondary' onPressI={handleSignIn} />
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.txt}>
                    <Text style={styles.log}>Não tem uma conta?</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push("Cadastrar")} style={styles.entrar}>
                        <Text style={styles.sub}>Clique aqui para se cadastrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </FundoLog>
    );
}
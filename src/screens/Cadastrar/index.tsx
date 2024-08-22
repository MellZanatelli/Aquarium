import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoLog } from '../../components/fundoLogin';
import { Zocial, Fontisto, FontAwesome6 } from '@expo/vector-icons';
import { styles } from "./styles";
import { Scontainer, colors } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { ButtonInterface } from '../../components/ButtonInterface';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export function Cadastrar({ navigation }: MenuStackTypes) {
    const [data, setData] = useState<IRegister>(); // Preenche dados
    const { setLoading } = useAuth()

    async function handleRegister() {
        if (data?.email && data.name && data.password) { // poupa o if data para saber se tá preenchido
            setLoading(true)
            try {
                console.log(data)
                const response = await apiUser.cadastrar(data)
                Alert.alert(`Usuário ${response.data.name} foi cadastrado com sucesso!`)
                navigation.navigate("Login")
            } catch (error) {
                const err = error as AxiosError
                console.log(err.response?.data)
                // Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos antes de continuar.")
        }
    }
    function handleGoBack() {
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    return (
        
        <FundoLog>
            <View style={Scontainer.container}>
                <View style={styles.header}>
                    <Text style={styles.h3}>
                        Crie sua conta {""}
                    </Text>
                    <View style={styles.firula}>
                        <Image style={styles.gotas} source={require('../../assets/splashE.png')} />
                        <Text style={styles.grat}>gratuitamente</Text>
                        <Image style={styles.gotas} source={require('../../assets/splashD.png')} />
                    </View>
                </View>
                <Text style={styles.h4}>
                    Preencha corretamente com suas informações!
                </Text>
                <KeyboardAvoidingView style={styles.kav}>
                    <View style={styles.formRow}>
                    <FontAwesome6 name="user-pen" style={styles.icon}/>
                        <TextInput
                            placeholderTextColor={colors.roxo}
                            style={styles.input}
                            placeholder="Nome"
                            onChangeText={(i) => handleChange({ name: i })}
                        />
                    </View>
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
                        <ButtonInterface title='Cadastrar' type='secondary' onPressI={handleRegister} />
                    </View>
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
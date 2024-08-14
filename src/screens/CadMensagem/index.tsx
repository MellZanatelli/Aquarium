import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoLog } from '../../components/fundoLogin';
import { Zocial, Fontisto, FontAwesome6 } from '@expo/vector-icons';
import { styles } from "./styles";
import { Scontainer, colors } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { ButtonInterface } from '../../components/ButtonInterface';
import { apiMensagem, apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';
import { IMensagem } from '../../services/data/Mensagem';

export function CadMensagem({ navigation}: MensagemTypes) {
    const[data, setData] = useState<IMensagem>()
    const { setLoading } = useAuth()
    function handleChange(item: IMensagem) {
        setData({...data, ...item});
    }

    async function handleCadMensage(){
        if(data?.title && data.mensagem){
            setLoading(true)
            try {
                await apiMensagem.store(data)
                Alert.alert('Mensagem cadastrada com sucesso.')
                navigation.navigate('Mensagem')
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert('Preencha todos os campos antes de continuar')
        }
    }
}
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoPer } from '../../components/fundoPerfil';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { Scontainer, colors } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { ButtonInterface } from '../../components/ButtonInterface';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';

export function Perfil() {
    const { user, signOut } = useAuth()

    return (
        <FundoPer>
            <View style={Scontainer.container}>
                <View>
                    <Image style={styles.gotas} source={require('../../assets/splashE.png')} />
                    <Text style={styles.name}>Olá,{" "}{user?.user.name}</Text>
                    <Image style={styles.gotas} source={require('../../assets/splashD.png')} />
                </View>
                <View>
                    <Text style={styles.confira}>Confira as notícias sobre seu aquário!</Text>
                </View>
                <View style={styles.noticias}>
                    <View style={styles.noticia}>
                        <FontAwesome name="heartbeat" style={styles.icon} />
                        <Text style={styles.txt}>Sua colônia de corais está adoecendo!</Text>
                    </View>
                    <View style={styles.noticia}>
                        <MaterialCommunityIcons name="food-drumstick-off" style={styles.icon} />
                        <Text style={styles.txt}>Seu peixe-palhaço está com fome!</Text>
                    </View>
                    <View style={styles.noticia}>
                        <MaterialIcons name="cleaning-services" style={styles.icon} />
                        <Text style={styles.txt}>A água do seu aquário está limpinha, graças aos seus camarões!</Text>
                    </View>
                </View>
                <ButtonInterface title="Sair" type="primary"
                    onPressI={async () => await signOut()}
                />
            </View>
        </FundoPer>
    )
}
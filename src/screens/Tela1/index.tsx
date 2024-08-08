
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Fundo } from '../../components/fundo';
import { styles } from "./styles";
import { Scontainer } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";
import { Pontinhos } from '../../components/pontinhos'
import { Pontos } from '../../styles/globalstyle'
import { Page } from '../../../App'

export function Tela1({ setPagina }: Page) {

    return (
        <Fundo>
            <View style={Scontainer.container}>
                <View style={styles.header}>
                    <Text style={styles.h3}>
                        Bem-vindo ao
                    </Text>
                    <Image style={styles.titulo} source={require('../../assets/Aquarium.png')} />
                </View>
                <Text style={styles.h3}>
                    Descubra como criar e cuidar de seu próprio ecossistema aquático!
                </Text>
                <Image style={styles.img} source={require('../../assets/ecossistema.png')} />
            </View>
            <View style={Pontos.pontos}>
                <Pontinhos onPressP={() => setPagina(1)} cor={true} />
                <Pontinhos onPressP={() => setPagina(2)} cor={false} />
                <Pontinhos onPressP={() => setPagina(3)} cor={false} />
                <Pontinhos onPressP={() => setPagina(4)} cor={false} />
            </View>
        </Fundo >
    )
}
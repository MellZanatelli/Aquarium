import { View, Text } from "react-native";
import { styles } from './styles'
import { Scontainer } from "../../styles/globalstyle";
import { useEffect, useState } from "react";
import { IResponseMensagem } from "../../services/data/Mensagem";
import { useAuth } from "../../hook/auth";
import { apiMensagem } from "../../services/data";
import { FlatList } from "react-native-gesture-handler";
import { MensagemTypes } from "../../navigation/Mensagem.navigation";
import { ButtonInterface } from "../../components/ButtonInterface";

export function Mensagem({ navigation }: MensagemTypes) {

    const [mensagem, setMensagem] = useState<IResponseMensagem[]>([])

    const { setLoading } = useAuth()

    useEffect(() => {
        setLoading(true)
        async function loadMensagem() {
            const response = await apiMensagem.index()
            setMensagem(response.data)
        }
        setLoading(false)
        navigation.addListener("focus", () => loadMensagem())
    }, [])

    interface itemMensagem {
        item: IResponseMensagem
    }

    const renderItem = (({ item }: itemMensagem) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Nome:{" "}{item.user.name}</Text>
                <Text style={styles.itemText}>Título:{" "}{item.title}</Text>
                <Text style={styles.itemText}>Mensagem:{" "}{item.mensagem}</Text>
            </View>
        )
    })

    return (
        <View style={Scontainer.container}>
            {
                mensagem.length > 0 && (
                    <FlatList
                        data={mensagem}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                    />
                )
            }
            <ButtonInterface title='Escrever' type='secondary'
                onPressI={() => navigation.navigate('CadMsg')} />
        </View>
    )
}
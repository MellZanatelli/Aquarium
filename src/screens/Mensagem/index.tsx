import { View, Text } from "react-native";
import { styles } from './styles'
import { Scontainer } from "../../styles/globalstyle";
import { useEffect, useState } from "react";
import { IResponseMensagem } from "../../services/data/Mensagem";
import { useAuth } from "../../hook/auth";
import { apiMensagem } from "../../services/data";
import { FlatList } from "react-native-gesture-handler";

export function Mensagem() {

    const [mensagem, setMensagem] = useState<IResponseMensagem[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMensagem() {
            const response = await apiMensagem.index()
            setMensagem(response.data)
        }
        setLoading(false)
        loadMensagem()
    }, [])

    interface itemMensagem {
        item: IResponseMensagem
    }

    const renderItem = (({ item }: itemMensagem) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Título:{" "}{item.title}</Text>
                <Text style={styles.itemText}>Título:{" "}{item.mensagem}</Text>
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
        </View>
    )
}
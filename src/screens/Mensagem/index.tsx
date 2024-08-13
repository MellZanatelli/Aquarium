import { View, Text } from "react-native";
import { styles } from './styles'
import { Scontainer } from "../../styles/globalstyle";

export function Mensagem(){
    return(
        <View style={Scontainer.container}>
            <Text>Mensagem</Text>
        </View>
    )
}
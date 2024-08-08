import { TouchableOpacity, TouchableOpacityProps} from "react-native"
import { styles } from "./styles"

interface Pontinho extends TouchableOpacityProps {
    onPressP: () => void
    cor: boolean
}

export function Pontinhos({onPressP, cor}:Pontinho){
    return(
        <>
            <TouchableOpacity style={cor ? styles.colorido : styles.branco} onPress = {onPressP}/>
        </>
    )
}
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Mensagem, CadMensagem } from '../screens'
import React from 'react' 
type MessageStackParamList = {
    Mensagem: undefined
    CadMsg: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Mensagem'>
export type MensagemTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Mensagem' component={Mensagem} />
            <Stack.Screen name='CadMsg' component={CadMensagem} />
        </Stack.Navigator>
    )
}
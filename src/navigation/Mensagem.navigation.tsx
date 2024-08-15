import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Mensagem, CadMensagem } from '../screens'
import React from 'react' 
type MessageStackParamList = {
    Msg: undefined
    CadMsg: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Msg'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Msg' component={Mensagem} />
            <Stack.Screen name='CadMsg' component={CadMensagem} />
        </Stack.Navigator>
    )
}
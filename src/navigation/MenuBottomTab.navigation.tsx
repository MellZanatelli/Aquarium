import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { Perfil, Mensagem } from '../screens';
import { Feather } from '@expo/vector-icons';
import { colors } from '../styles/globalstyle';
import { FontAwesome } from '@expo/vector-icons';
import { MessageNavigation } from './Mensagem.navigation';

type MenuTabParam = {
    Perfil: undefined
    Mensagem: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Perfil">

export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.roxo,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.roxo,
            tabBarInactiveTintColor: colors.white,
        }}>
            <Tab.Screen name="Perfil" component = {Perfil}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-circle" size={24} color={colors.white}/>
                    ),
                }}
            />

            <Tab.Screen name="Mensagem" component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <Feather name='sliders' size={24} color={colors.white} />
                    ),
                }}    
            />
        </Tab.Navigator>

    );
}
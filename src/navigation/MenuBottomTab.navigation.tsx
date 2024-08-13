import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { Perfil, Mensagem } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { colors } from '../styles/globalstyle';
import { FontAwesome } from '@expo/vector-icons';

type MenuTabParam = {
    Per: undefined
    Msg: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Per">

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
            <Tab.Screen name="Per" component = {Perfil}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-circle"  />
                    )
                }}
            />

            <Tab.Screen name="Msg" component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <Feather name='sliders' size={24} color='black' />
                    )
                }}    
            />
        </Tab.Navigator>

    );
}
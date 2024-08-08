import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { Tela2, Tela3 } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    pag1: undefined
    pag2: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "pag1">

export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();

    return (
        <Tab.Navigator>
            <Tab.Screen name="pag1" component = {Tela2}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen name="pag2" component={Tela3}
                options={{
                    tabBarIcon: () => (
                        <Feather name='sliders' size={24} color='black' />
                    )
                }}    
            />
        </Tab.Navigator>

    );
}
import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer'
import { colors } from '../styles/globalstyle';
import { MenuTabs } from './MenuBottomTab.navigation';
import { FontAwesome } from '@expo/vector-icons';

type DrawerParamList = {
    Tab: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>

export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}

export function MenuDrawer() {
    const Drawer = createDrawerNavigator<DrawerParamList>()

    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.roxo },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.roxo
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={MenuTabs}
            options={{
                drawerLabel: 'Perfil',
                headerTitle: 'Perfil',
                drawerIcon: () => (
                    <FontAwesome name="user-circle" size={24} color={colors.roxo}/>
                ),
            }}/>
        </Drawer.Navigator>
    )
}
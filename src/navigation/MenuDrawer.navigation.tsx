import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer'
import { colors } from '../styles/globalstyle';
import { MenuTabs } from './MenuBottomTab.navigation';
import { FontAwesome, Ionicons} from '@expo/vector-icons';
import { Camera } from '../screens/Camera';
import { Imagens } from '../screens/Imagens';

type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
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
                    <FontAwesome name="user-circle" size={24} color={colors.white}/>
                ),
            }}/>
            <Drawer.Screen name='Camera' component={Camera}
            options={{
                drawerIcon: () => (
                    <Ionicons name="camera" size={24} color={colors.white}/>
                ),
            }}/>
            <Drawer.Screen name='Imagem' component={Imagens} 
            options={{
                drawerIcon: ()=> (
                    <FontAwesome name="picture-o" size={24} color={colors.white} />
                ),
            }} />
        </Drawer.Navigator>
    )
}
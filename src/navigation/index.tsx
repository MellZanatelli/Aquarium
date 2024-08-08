import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MenuStackLogin } from './Login.navigation';
import { MenuTabs } from './MenuBottomTab.navigation';

export function Navigations(){
    //const { user, loading } = useAuth;
    return(
        <NavigationContainer>
            <MenuStackLogin />
        </NavigationContainer>
    )
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MenuStackLogin } from './Login.navigation';
import { useAuth } from '../hook/auth';
import { MenuDrawer } from './MenuDrawer.navigation';
import { Loading } from '../components/Loading';

export function Navigations(){
    const { user, loading } = useAuth();
    
    if(loading) {
        return <Loading/>
    }
    return(
        <NavigationContainer>
            {user?.token ? <MenuDrawer/> : <MenuStackLogin/>}
        </NavigationContainer>
    )
}
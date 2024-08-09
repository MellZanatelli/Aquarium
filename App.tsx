import 'react-native-gesture-handler';
import { Tela1 } from './src/screens/Tela1'
import { Tela2 } from './src/screens/Tela2'
import { Tela3 } from './src/screens/Tela3'
import { Tela4 } from './src/screens/Tela4'
import { Dispatch, SetStateAction, useState } from 'react'
import { Navigations } from './src/navigation';

import {
  useFonts,
  TheNautigal_400Regular,
  TheNautigal_700Bold,
} from '@expo-google-fonts/the-nautigal';

import { StatusBar } from 'expo-status-bar';

export interface Page {
  setPagina: Dispatch<SetStateAction<number>>
}

export default function App() {

  let [fontsLoaded] = useFonts({
    TheNautigal_400Regular,
    TheNautigal_700Bold,
  });

  const [pagina, setPage] = useState(1)

  if (!fontsLoaded) {
    return null;
  }

  switch (pagina) {
    case 1:
      return <Tela1 setPagina={setPage} />
      break
    case 2:
      return <Tela2 setPagina={setPage} />
      break
    case 3:
      return <Tela3 setPagina={setPage} />
      break
    // case 4:
    // return <Tela4 setPagina={setPage} />
    // break
  }

  return (
    <>
      <Navigations />
      <StatusBar style='auto' />
    </>
  );

}
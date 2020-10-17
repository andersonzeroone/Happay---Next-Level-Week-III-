import React from 'react';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import {useFonts} from 'expo-font';
import Routes from './src/routes';

export default function App() {
  const [FontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  });

  if(!FontsLoaded){
    return null;
  }  

  return (
    <Routes/>
  );
}


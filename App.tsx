import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';


import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
   <NativeBaseProvider theme={THEME}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
     { fontsLoaded ? <Home /> : <Loading />}
   </NativeBaseProvider>
  );
}



import { StatusBar } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import { COLORS } from '@styles/colors'
import { Loading } from '@components/Loading'
import { CartProvider } from '@contexts/CartProvider'

import { Routes } from './routes'

export function AppSrc() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ backgroundColor: COLORS['gray-900'] }}>
        <CartProvider>{fontsLoaded ? <Routes /> : <Loading />}</CartProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

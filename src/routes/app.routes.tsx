import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@pages/Home'
import { Details } from '@pages/Details'
import { Cart } from '@pages/Cart'
import { Checkout } from '@pages/Checkout'
import { HeaderLeft } from '@pages/Home/components/HeaderLeft'
import { HeaderRight } from '@pages/Home/components/HeaderRight'
import { COLORS } from '@styles/colors'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS['gray-100'] },
        headerShadowVisible: false,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          headerLeft: HeaderLeft,
          headerTitle: '',
          headerRight: undefined,
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          headerTitle: '',
          headerRight: HeaderRight,
          headerTintColor: COLORS.white,
        }}
      />
      <Screen
        name="cart"
        component={Cart}
        options={{
          headerStyle: { backgroundColor: COLORS['gray-900'] },
          headerTitleStyle: { fontFamily: 'Baloo2_700Bold', fontSize: 16 },
          headerShadowVisible: true,
          headerTitleAlign: 'center',
          headerTitle: 'Carrinho',
          headerTintColor: COLORS['gray-200'],
        }}
      />
      <Screen name="checkout" component={Checkout} options={{ headerShown: false }} />
    </Navigator>
  )
}

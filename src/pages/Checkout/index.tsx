import { StatusBar, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { Title } from '@components/typography/Title'
import { Text } from '@components/typography/Text'
import CheckoutSVG from '@assets/checkout.svg'
import { Label } from '@components/typography/Label'
import { COLORS } from '@styles/colors'

export function Checkout() {
  const { navigate } = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckoutSVG />
      <View
        style={{
          marginVertical: 40,
          paddingHorizontal: 64,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Title size="lg" color="yellow-dark">
          Uhu! Pedido confirmado
        </Title>
        <Text size="sm" style={{ textAlign: 'center' }}>
          Agora é só aguardar que logo o café chegará até você!
        </Text>
        <View
          style={{
            minWidth: '100%',
            marginTop: 64,
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <TouchableOpacity
            onPress={() => navigate('home')}
            activeOpacity={0.7}
            style={{
              backgroundColor: COLORS['purple-dark'],
              paddingVertical: 12,
              borderRadius: 8,
            }}
          >
            <Label>ir para o início</Label>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </View>
  )
}

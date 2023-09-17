import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Text } from '@components/typography/Text'
import { Title } from '@components/typography/Title'
import { COLORS } from '@styles/colors'
import { LabelButton } from '@components/buttons/LabelButton'
import { useCart } from '@contexts/CartProvider'

export function Footer() {
  const { navigate } = useNavigation()
  const { cart, clearCart } = useCart()

  const cartTotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity!, 0)

  const onCheckout = () => {
    clearCart()
    navigate('checkout')
  }

  return (
    <View
      style={{
        bottom: 0,
        position: 'absolute',
        width: '100%',
        backgroundColor: COLORS.white,
        paddingVertical: 32,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text>Valor total</Text>
        <Title>{`R$ ${cartTotal.toFixed(2).replace('.', ',')}`}</Title>
      </View>
      <View style={{ width: '100%' }}>
        <LabelButton onPress={onCheckout} label="confirmar pedido" />
      </View>
    </View>
  )
}

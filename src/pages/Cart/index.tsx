import { StatusBar, View } from 'react-native'

import { ShoppingCart } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS } from '@styles/colors'
import { CartCard } from '@components/cards/CartCard'
import { useCart } from '@contexts/CartProvider'
import { Text } from '@components/typography/Text'
import { LabelButton } from '@components/buttons/LabelButton'

import { Footer } from './components/Footer'

export function Cart() {
  const { navigate } = useNavigation()
  const { cart, removeProductFromCart, updateProductAmount } = useCart()

  const isEmptyCart = cart.length === 0

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: COLORS['gray-900'],
      }}
    >
      {isEmptyCart && (
        <View
          style={{
            padding: 64,
            gap: 20,
            width: '100%',
          }}
        >
          <View style={{ alignItems: 'center', gap: 12 }}>
            <ShoppingCart size={24} weight="fill" color={COLORS['gray-500']} />
            <Text size="sm" color="gray-400">
              Seu carrinho está vazio
            </Text>
          </View>
          <LabelButton
            color="purple-dark"
            label="ver catálogo"
            onPress={() => navigate('home')}
          />
        </View>
      )}
      {!isEmptyCart && (
        <>
          {cart.map((product) => (
            <CartCard
              key={product.cartId}
              data={product}
              quantity={product.quantity!}
              onRemove={() => removeProductFromCart(product.cartId!)}
              onIncrement={() => updateProductAmount(product, 1)}
              onDecrement={() => updateProductAmount(product, -1)}
            />
          ))}
          <Footer />
        </>
      )}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </View>
  )
}

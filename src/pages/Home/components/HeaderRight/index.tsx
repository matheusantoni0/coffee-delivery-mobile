import { TouchableOpacity } from 'react-native'
import { useCallback } from 'react'

import { ShoppingCart } from 'phosphor-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'
import { useCart } from '@contexts/CartProvider'

export function HeaderRight() {
  const { navigate, setOptions } = useNavigation()
  const { cart } = useCart()

  const cartQuantity = cart?.length ?? 0

  useFocusEffect(
    useCallback(() => {
      console.log('HeaderRight.tsx: useFocusEffect: cartQuantity: ', cartQuantity)
    }, [cartQuantity]),
  )

  return (
    <TouchableOpacity
      onPress={() => navigate('cart')}
      activeOpacity={0.7}
      style={{ marginRight: 16, padding: 8, position: 'relative' }}
    >
      {cartQuantity > 0 && (
        <Text
          size="xs"
          color="white"
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            backgroundColor: COLORS.purple,
            borderRadius: 999,
            minWidth: 20,
            height: 20,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          {cartQuantity}
        </Text>
      )}

      <ShoppingCart
        size={20}
        weight="fill"
        color={cartQuantity > 0 ? COLORS.purple : COLORS.yellow}
      />
    </TouchableOpacity>
  )
}

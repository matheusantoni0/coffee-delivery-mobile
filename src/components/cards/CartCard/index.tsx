import { View, Image } from 'react-native'

import { Minus, Plus, Trash } from 'phosphor-react-native'

import { Text } from '@components/typography/Text'
import { Title } from '@components/typography/Title'
import { IconButton } from '@components/buttons/IconButton'
import { COLORS } from '@styles/colors'
import { Product } from '@contexts/CartProvider/types'

export type CartCardProps = {
  data: Product
  quantity: number
  onRemove: () => void
  onIncrement: () => void
  onDecrement: () => void
}

export function CartCard(props: CartCardProps) {
  const { data, quantity, onRemove, onDecrement, onIncrement } = props
  const { name, price, image, size } = data
  return (
    <View
      style={{
        gap: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        paddingHorizontal: 32,
        flexDirection: 'row',
        borderColor: COLORS['gray-600'],
      }}
    >
      <Image
        source={image}
        alt=""
        style={{
          width: 64,
          height: 64,
          borderRadius: 999,
        }}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text color="gray-100">{name}</Text>
          <Title>{`R$ ${(price * quantity!).toFixed(2).replace('.', ',')}`}</Title>
        </View>
        <Text size="sm" color="gray-400">
          {size}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            gap: 8,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              borderColor: COLORS['gray-600'],
              borderRadius: 6,
              borderWidth: 1,
              gap: 4,
            }}
          >
            <IconButton icon={Minus} onPress={onDecrement} />
            <Text size="sm" color="gray-100" style={{ textAlign: 'center', minWidth: 24 }}>
              {quantity!}
            </Text>
            <IconButton icon={Plus} onPress={onIncrement} />
          </View>
          <IconButton
            onPress={onRemove}
            icon={Trash}
            style={{ backgroundColor: COLORS['gray-700'] }}
          />
        </View>
      </View>
    </View>
  )
}

import { View, Image, TouchableOpacity } from 'react-native'

import { Title } from '@components/typography/Title'
import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'
import { Product } from '@contexts/CartProvider/types'

type HCardProps = {
  data: Product
  onPress: () => void
}

export function HCard(props: HCardProps) {
  const { data, onPress } = props
  const { image, name, description, price } = data

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 120,
          backgroundColor: COLORS['gray-800'],
          borderRadius: 6,
          borderColor: COLORS['gray-700'],
          borderWidth: 1,
          borderTopRightRadius: 36,
          borderBottomLeftRadius: 36,
          gap: 12,
          marginTop: 16,
          padding: 8,
        }}
      >
        <Image
          source={image}
          style={{
            height: 96,
            width: 96,
            // backgroundColor: 'gray',
            borderRadius: 999,
            marginTop: -24,
          }}
          alt={name}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, width: '100%', gap: 4 }}>
            <Title size="sm">{name}</Title>
            <Text size="xs" color="gray-400">
              {description}
            </Text>
          </View>
          <View style={{ gap: 2, flexDirection: 'row', alignItems: 'baseline' }}>
            <Text color="yellow-dark" size="sm">
              R$
            </Text>
            <Title color="yellow-dark">{price.toFixed(2).replace('.', ',')}</Title>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

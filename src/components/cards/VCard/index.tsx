import { View, Image, TouchableOpacity } from 'react-native'

import { Title } from '@components/typography/Title'
import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'
import { Type } from '@components/typography/Type'
import { Product } from '@contexts/CartProvider/types'

type VCardProps = {
  data: Product
  onPress: () => void
}

export function VCard(props: VCardProps) {
  const { data, onPress } = props
  const { name, description, price, image, tags } = data

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          width: 208,
          alignItems: 'center',
          backgroundColor: COLORS['gray-800'],
          borderRadius: 6,
          borderColor: COLORS['gray-700'],
          borderWidth: 1,
          borderTopRightRadius: 36,
          borderBottomLeftRadius: 36,
          padding: 8,
        }}
      >
        <View style={{ gap: 14, alignItems: 'center' }}>
          <Image
            source={image}
            style={{
              height: 120,
              width: 120,
              borderRadius: 999,
              marginTop: -40,
            }}
            resizeMode="contain"
            alt={name}
          />
          <View style={{ gap: 4, flexDirection: 'row', alignItems: 'baseline' }}>
            {tags.map((tag) => (
              <Type key={`VCard-${tag}`}>{tag}</Type>
            ))}
          </View>
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Title>{name}</Title>
            <Text size="xs" color="gray-400">
              {description}
            </Text>
          </View>
          <View style={{ gap: 4, flexDirection: 'row', alignItems: 'baseline' }}>
            <Text color="yellow-dark" size="sm">
              R$
            </Text>
            <Title size="xl" color="yellow-dark">
              {price.toFixed(2).replace('.', ',')}
            </Title>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

import { Image, View } from 'react-native'
import { useEffect, useState } from 'react'

import { products } from '@helpers/constants'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Title } from '@components/typography/Title'
import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'
import { LabelButton } from '@components/buttons/LabelButton'
import { Amount } from '@components/forms/Amount'
import { SizeSelect, sizeOptions } from '@components/forms/SizeSelect'
import { Tag } from '@components/typography/Tag'
import { useCart } from '@contexts/CartProvider'
import { HeaderRight } from '@pages/Home/components/HeaderRight'

export function Details() {
  const { setOptions } = useNavigation()
  const { params } = useRoute()
  const { id } = params as { id: string }
  const currentProduct = products.filter((item) => item.id === id)[0]
  const { name, price, description, tags } = currentProduct
  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState<(typeof sizeOptions)[0] | null>(null)

  const { addProductToCart } = useCart()

  const onChangeAmount = (value: number) => {
    setAmount((prev) => {
      if (prev + value <= 0) return prev
      return prev + value
    })
  }

  const onAddToCart = () => {
    if (!selectedSize) return

    if (amount <= 0) return
    addProductToCart({ ...currentProduct, quantity: amount, size: selectedSize?.label })
    // navigate('cart')
  }

  useEffect(() => {
    setOptions({ headerRight: () => <HeaderRight /> })
  }, [setOptions])

  return (
    <View style={{ flex: 1, backgroundColor: COLORS['gray-100'] }}>
      <View
        style={{
          flex: 0.66,
          backgroundColor: COLORS['gray-100'],
          paddingHorizontal: 32,
        }}
      >
        <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'space-between' }}>
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  style={{
                    color: COLORS.white,
                    backgroundColor: COLORS['gray-200'],
                    borderColor: COLORS['gray-200'],
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </View>
            <Title color="white">{name}</Title>
          </View>
          <View
            style={{ gap: 4, flexDirection: 'row', alignItems: 'baseline', marginTop: 'auto' }}
          >
            <Text color="yellow-dark" size="sm">
              R$
            </Text>
            <Title size="xl" color="yellow-dark">
              {price.toFixed(2).replace('.', ',')}
            </Title>
          </View>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text color="gray-500">{description}</Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.34,
          backgroundColor: COLORS['gray-800'],
          paddingHorizontal: 32,
        }}
      >
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/coffee-details.png')}
          style={{
            aspectRatio: 1,
            marginTop: -220,
            alignSelf: 'center',
          }}
          alt={name}
          resizeMode="contain"
        />
        <View style={{ gap: 20, marginTop: -16 }}>
          <View style={{ gap: 8 }}>
            <Text size="sm" color="gray-400">
              Selecione o tamanho:
            </Text>
            <SizeSelect onSelectedSize={setSelectedSize} selectedSize={selectedSize} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: COLORS['gray-700'],
              borderRadius: 6,
              padding: 8,
              gap: 16,
            }}
          >
            <Amount
              amount={amount}
              onIncrease={() => onChangeAmount(1)}
              onDecrease={() => onChangeAmount(-1)}
            />
            <LabelButton
              color="purple-dark"
              label="adicionar"
              disabled={!selectedSize}
              onPress={onAddToCart}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

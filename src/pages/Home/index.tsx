import { useEffect, useState } from 'react'
import { View, Image, ScrollView } from 'react-native'

import { MagnifyingGlass } from 'phosphor-react-native'
import { products } from '@helpers/constants'
import { useNavigation } from '@react-navigation/native'

import beansImg from '@assets/coffee-beans.png'
import { Input } from '@components/forms/Input'
import { Title } from '@components/typography/Title'
import { Tag } from '@components/typography/Tag'
import { HCard } from '@components/cards/HCard'
import { VCard } from '@components/cards/VCard'
import { COLORS } from '@styles/colors'

import { HeaderRight } from './components/HeaderRight'

const sections = {
  Tradicionais: products.filter((product) => product.tags.includes('tradicional')),
  Doces: products.filter((product) => product.tags.includes('doce')),
  Especiais: products.filter((product) => product.tags.includes('especial')),
}

const coffeeTypes = Object.keys(sections)

const topProducts = Object.entries(sections).map(([_, sectionProducts]) => ({
  product: sectionProducts[Math.floor(Math.random() * sectionProducts.length)],
}))

export function Home() {
  const { navigate, setOptions } = useNavigation()
  const [search, setSearch] = useState('')

  useEffect(() => {
    setOptions({ headerRight: () => <HeaderRight /> })
  }, [setOptions])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64 }}
      >
        <View
          style={{
            height: 244,
            backgroundColor: COLORS['gray-100'],
            paddingHorizontal: 32,
            gap: 14,
          }}
        >
          <Title color="white">Encontre o café perfeito para qualquer hora do dia</Title>
          <Input
            placeholder="Pesquisar"
            icon={MagnifyingGlass}
            value={search}
            onChangeText={setSearch}
          />
          <Image
            style={{ marginTop: -14, marginLeft: 'auto', marginRight: -28 }}
            source={beansImg}
            resizeMode="contain"
            alt="Grãos de café"
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 32, gap: 32 }}
          style={{ marginTop: -112, flex: 1 }}
        >
          {topProducts.map(({ product }) => (
            <VCard
              key={`top-products-${product.id}`}
              data={product}
              onPress={() => navigate('details', { id: product.id })}
            />
          ))}
        </ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 32, paddingVertical: 12, gap: 8 }}>
            <Title size="sm" color="gray-300">
              Nossos cafés
            </Title>
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
              {coffeeTypes.map((type) => (
                <Tag key={type}>{type}</Tag>
              ))}
            </View>
          </View>

          {Object.entries(sections).map(([section, sectionProducts]) => (
            <View key={section} style={{ paddingHorizontal: 32, paddingVertical: 16, gap: 8 }}>
              <Title size="xs" color="gray-400">
                {section}
              </Title>
              {sectionProducts.map((product) => (
                <HCard
                  key={product.id}
                  data={product}
                  onPress={() => navigate('details', { id: product.id })}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

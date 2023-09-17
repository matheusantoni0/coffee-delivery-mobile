import { View } from 'react-native'

import { MapPin } from 'phosphor-react-native'

import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'

export function HeaderLeft() {
  return (
    <View style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      <MapPin size={20} weight="fill" color={COLORS.purple} />
      <Text size="sm" color="gray-900">
        Timbó, SC
      </Text>
    </View>
  )
}

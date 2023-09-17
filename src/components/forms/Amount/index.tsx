import { View } from 'react-native'

import { Minus, Plus } from 'phosphor-react-native'

import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'
import { IconButton } from '@components/buttons/IconButton'

export type AmountProps = {
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function Amount(props: AmountProps) {
  const { amount, onIncrease, onDecrease } = props

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: COLORS['gray-600'],
        borderRadius: 6,
        gap: 4,
      }}
    >
      <IconButton icon={Minus} onPress={onDecrease} />
      <Text size="sm" color="gray-100" style={{ textAlign: 'center', minWidth: 24 }}>
        {amount}
      </Text>
      <IconButton icon={Plus} onPress={onIncrease} />
    </View>
  )
}

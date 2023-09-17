import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { COLORS } from '@styles/colors'
import { Text } from '@components/typography/Text'

export type SizeButtonProps = TouchableOpacityProps & {
  label: string
  isSelected?: boolean
  color?: keyof typeof COLORS
}

export function SizeButton(props: SizeButtonProps) {
  const { label, isSelected = false, color = 'gray-700', ...attrs } = props
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flex: 1,
        backgroundColor: isSelected ? 'transparent' : COLORS[color],
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: isSelected ? COLORS.purple : 'transparent',
        borderRadius: 6,
      }}
      {...attrs}
    >
      <Text
        size="sm"
        color={isSelected ? 'purple' : 'gray-300'}
        bold={isSelected}
        style={{ textAlign: 'center' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import { ElementType } from 'react'

import { IconProps } from 'phosphor-react-native'

import { COLORS } from '@styles/colors'

export type IconButtonProps = TouchableOpacityProps & {
  icon: ElementType<IconProps>
  style?: StyleProp<ViewStyle>
  color?: keyof typeof COLORS
}

export function IconButton(props: IconButtonProps) {
  const { color = 'yellow-dark', icon: Icon, style, ...attrs } = props
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[{ paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6 }, style]}
      {...attrs}
    >
      <Icon size={20} color={COLORS.purple} />
    </TouchableOpacity>
  )
}

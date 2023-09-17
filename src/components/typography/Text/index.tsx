import { Text as RNText, StyleProp, TextStyle } from 'react-native'
import { ReactNode } from 'react'

import { COLORS } from '@styles/colors'

type TextProps = {
  children: string | number | ReactNode
  bold?: boolean
  style?: StyleProp<TextStyle>
  size?: keyof typeof textSizes
  color?: keyof typeof COLORS
}

const textSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
}

export function Text(props: TextProps) {
  const { children, size = 'md', color = 'gray-200', bold = false, style } = props
  return (
    <RNText
      style={[
        {
          color: COLORS[color],
          fontSize: textSizes[size],
          fontFamily: bold ? 'Roboto_700Bold' : 'Roboto_400Regular',
          lineHeight: textSizes[size] * 1.3,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  )
}

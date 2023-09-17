import { Text as RNText, StyleProp, TextStyle } from 'react-native'

import { COLORS } from '@styles/colors'

type TitleProps = {
  children: string
  style?: StyleProp<TextStyle>
  color?: keyof typeof COLORS
  size?: keyof typeof titleSizes
}

const titleSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 31,
  '2xl': 36,
}

export function Title(props: TitleProps) {
  const { children, size = 'md', color = 'gray-200', style } = props
  return (
    <RNText
      style={[
        {
          color: COLORS[color],
          fontSize: titleSizes[size],
          fontFamily: 'Baloo2_700Bold',
          lineHeight: titleSizes[size] * 1.3,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  )
}

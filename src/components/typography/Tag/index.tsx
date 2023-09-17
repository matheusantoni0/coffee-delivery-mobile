import { Text as RNText, StyleProp, TextStyle } from 'react-native'

import { COLORS } from '@styles/colors'

type TagProps = {
  selected?: boolean
  style?: StyleProp<TextStyle>
  children: string
}

const isSelectedStyle: StyleProp<TextStyle> = {
  color: COLORS.white,
  backgroundColor: COLORS.purple,
}

export function Tag(props: TagProps) {
  const { selected = false, style, children } = props
  return (
    <RNText
      style={[
        {
          height: 25,
          fontSize: 10,
          fontFamily: 'Roboto_700Bold',
          lineHeight: 13,
          borderColor: COLORS.purple,
          color: COLORS['purple-dark'],
          borderWidth: 1,
          borderRadius: 999,
          paddingHorizontal: 6,
          textTransform: 'uppercase',
          textAlignVertical: 'center',
          textAlign: 'center',
        },
        selected && isSelectedStyle,
        style,
      ]}
    >
      {children}
    </RNText>
  )
}

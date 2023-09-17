import { Text as RNText } from 'react-native'

import { COLORS } from '@styles/colors'

type TypeProps = {
  children: string
}

export function Type(props: TypeProps) {
  const { children } = props
  return (
    <RNText
      style={[
        {
          fontSize: 10,
          lineHeight: 13,
          fontFamily: 'Roboto_700Bold',
          color: COLORS.purple,
          backgroundColor: COLORS['purple-light'],
          borderRadius: 999,
          paddingVertical: 4,
          paddingHorizontal: 6,
          textTransform: 'uppercase',
          textAlignVertical: 'center',
          textAlign: 'center',
        },
      ]}
    >
      {children}
    </RNText>
  )
}

import { Text as RNText } from 'react-native'

import { COLORS } from '@styles/colors'

type LabelProps = {
  children: string
}

export function Label(props: LabelProps) {
  const { children } = props
  return (
    <RNText
      style={{
        width: '100%',
        fontSize: 14,
        fontFamily: 'Roboto_700Bold',
        lineHeight: 22.4,
        textTransform: 'uppercase',
        color: COLORS.white,
        textAlign: 'center',
      }}
    >
      {children}
    </RNText>
  )
}

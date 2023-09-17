import { ElementType, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import { IconProps } from 'phosphor-react-native'

import { COLORS } from '@styles/colors'

type InputProps = TextInputProps & {
  icon?: ElementType<IconProps>
}

export function Input(props: InputProps) {
  const { icon: Icon, ...attrs } = props
  const [isActive, setIsActive] = useState(false)
  const isFilled = !!attrs.value
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS['gray-200'],
        borderRadius: 4,
        paddingHorizontal: 12,
        height: 42,
        width: '100%',
      }}
    >
      {Icon && (
        <Icon
          size={16}
          weight="regular"
          style={{ marginRight: 8 }}
          color={
            // eslint-disable-next-line no-nested-ternary
            isActive ? COLORS.yellow : isFilled ? COLORS['yellow-dark'] : COLORS['gray-400']
          }
        />
      )}
      <TextInput
        style={{
          fontFamily: 'Roboto_400Regular',
          fontSize: 16,
          lineHeight: 18,
          color: COLORS['gray-700'],
        }}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        returnKeyType="search"
        placeholderTextColor={COLORS['gray-400']}
        cursorColor={COLORS['gray-400']}
        {...attrs}
      />
    </View>
  )
}

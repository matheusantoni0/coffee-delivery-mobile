import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Label } from '@components/typography/Label'
import { COLORS } from '@styles/colors'

export type LabelButtonProps = TouchableOpacityProps & {
  label: string
  color?: keyof typeof COLORS
}

export function LabelButton(props: LabelButtonProps) {
  const { label, color = 'yellow-dark', ...attrs } = props
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flex: 1,
        minHeight: 48,
        backgroundColor: COLORS[color],
        paddingVertical: 12,
        borderRadius: 6,
      }}
      {...attrs}
    >
      <Label>{label}</Label>
    </TouchableOpacity>
  )
}

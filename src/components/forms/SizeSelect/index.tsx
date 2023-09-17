import { View } from 'react-native'

import { SizeButton } from '@components/buttons/SizeButton'

export const sizeOptions = [
  { value: 'small', label: '114ml' },
  { value: 'medium', label: '140ml' },
  { value: 'large', label: '227ml' },
]
export type Size = (typeof sizeOptions)[0]

export type SizeSelectProps = {
  selectedSize: Size | null
  onSelectedSize: (size: Size) => void
}

export function SizeSelect(props: SizeSelectProps) {
  const { selectedSize, onSelectedSize } = props
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 8,
      }}
    >
      {sizeOptions.map(({ label, value }) => (
        <SizeButton
          key={value}
          label={label}
          isSelected={selectedSize?.value === value}
          onPress={() => onSelectedSize({ label, value })}
        />
      ))}
    </View>
  )
}

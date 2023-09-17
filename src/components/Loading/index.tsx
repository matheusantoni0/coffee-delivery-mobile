import { ActivityIndicator, View } from 'react-native'

import { COLORS } from '@styles/colors'

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={COLORS.purple} size={64} />
    </View>
  )
}

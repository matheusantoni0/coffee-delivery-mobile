import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { COLORS } from '@styles/colors'

import { AppRoutes } from './app.routes'

export function Routes() {
  const theme = DefaultTheme
  theme.colors.background = COLORS['gray-900']

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  )
}

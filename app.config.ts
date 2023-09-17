import { ExpoConfig } from 'expo/config'

export default {
  expo: {
    name: 'ignite-rn-coffee-delivery-mobile',
    slug: 'ignite-rn-coffee-delivery-mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#7F47F8',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#7F47F8',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
  } satisfies ExpoConfig,
}

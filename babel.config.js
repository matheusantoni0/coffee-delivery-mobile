module.exports = (api) => {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@pages': './src/pages',
            '@reducers': './src/reducers',
            '@routes': './src/routes',
            '@services': './src/services',
            '@storages': './src/storages',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}

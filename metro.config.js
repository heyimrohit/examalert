const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Metro configuration for React Native
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

// Remove `.svg` from asset extensions and add to source extensions
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  ext => ext !== 'svg',
);
defaultConfig.resolver.sourceExts.push('svg');

const config = {
  transformer: defaultConfig.transformer,
  resolver: defaultConfig.resolver,
};

module.exports = mergeConfig(defaultConfig, config);

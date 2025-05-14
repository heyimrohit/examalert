import React from 'react';
import {Image, View, StyleProp, ViewStyle} from 'react-native';

interface CustomImageProps {
  style?: StyleProp<ViewStyle>;
  path?: string;
  width?: number;
  height?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({
  style,
  path,
  width = 100,
  height = 100,
}) => {
  const source = path ? {uri: path} : {uri: 'https://placehold.co/600x400/png'};

  return (
    <View style={[{width, height, overflow: 'hidden'}, style]}>
      <Image
        source={source}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />
    </View>
  );
};

export default CustomImage;

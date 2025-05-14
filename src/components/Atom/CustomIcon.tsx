import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Icons } from '../../assets/icons'; // Assuming the Icons are exported from this file

type IconName = keyof typeof Icons;

interface CustomIconProps {
  name: IconName;
  width?: number;
  height?: number;
  fill?: string;
  style?: ViewStyle;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  width = 24,
  height = 24,
  fill = 'black',
  style,

}) => {

  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in CustomIcon.`);
    return ;
  }

  return (
    <View style={style}>
      <IconComponent width={width} height={height} fill={fill} />
    </View>
  );
};

export default CustomIcon;

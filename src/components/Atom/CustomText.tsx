import React from 'react';
import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomTextProps {
  text: string;
  wrapperStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({ text, wrapperStyle, textStyle }) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // padding: 10,
    // backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomText;

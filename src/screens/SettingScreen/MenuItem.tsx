import { Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomIcon from '../../components/Atom/CustomIcon';

interface MenuItemProps {
  icon: any;
  label: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({icon, label, onPress}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconWrapper}>
      <CustomIcon name={icon} style={styles.icon} />
    </View>
    <Text style={styles.label}>{label}</Text>
    <CustomIcon name='rightIcon' style={styles.arrow} width={12} height={12} />
  </TouchableOpacity>
);

export default MenuItem;

import CustomIcon from '../../components/Atom/CustomIcon';
import CustomImage from '../../components/Atom/CustomImage';
import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import MenuItem from './MenuItem';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomIcon
            name="backIcon"
            style={{backgroundColor: '#eceff4', borderRadius: 25, padding: 8}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Setting</Text>
        <TouchableOpacity>
          <CustomIcon
            name="extraIcon"
            style={{backgroundColor: '#eceff4', borderRadius: 25, padding: 8}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <MenuItem icon="bellIcon" label="Notifications" />
        <MenuItem icon="paymentMethodIcon" label="Payment Method" />
      </View>

      <View style={styles.card}>
        <MenuItem icon="helpIcon" label="FAQs" />
        {/* <MenuItem icon={Images.reviews} label="User Reviews" /> */}
        <MenuItem
          onPress={() => navigation.navigate('Setting' as never)}
          icon="settingIcon"
          label="Settings"
        />
      </View>

      <View style={styles.card}>
        <MenuItem icon="logoutIcon" label="Log Out" />
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

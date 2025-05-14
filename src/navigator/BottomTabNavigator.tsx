import {Text, View, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen.tsx';
import CustomIcon from '../components/Atom/CustomIcon';
import React from 'react';
import SettingScreen from '../screens/SettingScreen/SettingScreen.tsx';

const Tab = createBottomTabNavigator();
const deviceWidth = Dimensions.get('window').width;

const TAB_SCREENS = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    icon: 'TabHomeIcon',
    label: 'Home',
  },
  {
    name: 'SettingScreen',
    component: SettingScreen,
    icon: 'TabSettingIcon',
    label: 'Setting',
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: deviceWidth < 600 ? 55 : 70,
          borderTopWidth: 0,
          backgroundColor: '#fff',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderColor: 'transparent',
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 6,
        },
      }}>
      {TAB_SCREENS.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({focused, color}) => (
              <TabBarIcon focused={focused} icon={item.icon} color={color} />
            ),
            tabBarLabel: ({focused, color, position}) => (
              <TabBarLabel
                focused={focused}
                color={color}
                label={item.label}
                position={position}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

function TabBarLabel({focused, color, label, position}) {
  return (
    <Text
      style={{
        fontSize: deviceWidth < 600 ? 10 : 12,
        lineHeight: 26,
        fontWeight: '600',
        textAlign: 'center',
        color: color || '#D1D1D1',
        zIndex: 100,
        marginLeft: position === 'beside-icon' ? 15 : 0,
      }}>
      {label}
    </Text>
  );
}

function TabBarIcon({
  focused,
  icon,
  color,
}: {
  focused: boolean;
  icon: string;
  color: string;
}) {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'flex-end', height: 40}}>
      <View style={{height: 4, marginBottom: 4}}>
        {focused && (
          <View
            style={{
              width: 32,
              height: 3,
              backgroundColor: '#F29E4C' || '#000',
              borderRadius: 5,
              alignSelf: 'center',
            }}
          />
        )}
      </View>

      <CustomIcon
        name={icon as 'Home' | 'Bar'}
        style={{alignSelf: 'center'}}
        width={28}
        height={28}
        fill={color || '#D1D1D1'}
      />
    </View>
  );
}

export default BottomTabNavigator;

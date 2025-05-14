import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

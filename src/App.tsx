import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootScreen from './screens/RootScreen';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
        backgroundColor="rgba(255,255,255,0.1)"
        barStyle="dark-content"
      />
      <RootScreen />
    </NavigationContainer>
  );
};

export default App;

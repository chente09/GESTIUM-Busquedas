import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native';
import { DrawerNavigator } from './src/screens/navigator/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

export default App;
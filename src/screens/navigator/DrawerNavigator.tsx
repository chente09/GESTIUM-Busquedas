import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { InterfazBusquedaScreen } from '../InterfazBusquedaScreen';
import { ProfileScreen } from '../ProfileScreen';
import { OptionsScreen } from '../OptionsScreen';



const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: '#212121', 
          width: 240, 
        },
        drawerLabelStyle: {
          color: '#fff', 
          fontSize: 20,
        },
      }}
    >
      <Drawer.Screen name="Búsqueda" component={InterfazBusquedaScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Opciones" component={OptionsScreen} />
    </Drawer.Navigator>
  );
};

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../HomeScreen';
import { useWindowDimensions } from 'react-native';
import RegistroScreen from '../RegistroScreen';
import { InterfazBusquedaScreen } from '../InterfazBusquedaScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator=()=>{
  const{width}=useWindowDimensions();
  return (
    <Drawer.Navigator screenOptions={{
      drawerType:(width>= 768) ?'permanent': 'front'}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Registro" component={RegistroScreen} />
      <Drawer.Screen name="Búsqueda" component={InterfazBusquedaScreen} />
    </Drawer.Navigator>
  );
}
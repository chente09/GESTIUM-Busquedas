import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../../commons/constantsColor';
import { HomeScreen } from '../HomeScreen';
import RegistroScreen from '../RegistroScreen';
import { InterfazBusquedaScreen } from '../InterfazBusquedaScreen';
import { DrawerNavigator } from './DrawerNavigator';


const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor: PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="RegistroScreen"  component={RegistroScreen} />
      <Stack.Screen name="Búsqueda" options={{headerShown:false}} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
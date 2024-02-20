import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../../commons/constantsColor';
import { HomeScreen } from '../HomeScreen';
import { DrawerNavigator } from './DrawerNavigator';
import { useState } from 'react';
import { RegistroScreen } from '../RegistroScreen';

//Data de prueba
export interface User {
  id: number,
  name: string,
  lastName: string,
  username: string,
  password: string,
  confirmPass: string,
  ci: string,
  cellphone: string,
  email: string,
  address: string,
}
const users: User[] = [
  { id: 1, name:'Vicente', lastName:'Nenger', username:'vnenger', password: '123456', confirmPass:'123456', ci:'0401786462', cellphone:'0969375372',  email: 'vnenger@gmail.com', address:'La Floresta' },

]

const Stack = createStackNavigator();

export const StackNavigator = () => {

  //Hook para controlar el estado de los usuarios registrados 
  const [usersLogin, setUsersLogin] = useState(users);

  //Funcion agregar un nuevo usuario en userLogin
  const handlerAddUser = (user: User) => {
    setUsersLogin([...usersLogin, user])
  }
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: PRIMARY_COLOR
      }
    }}>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} children={() => <HomeScreen users={usersLogin} />} />
      <Stack.Screen name="Registro" options={{ headerShown: false }} children={()=><RegistroScreen userLogin={usersLogin} setUSerLogin={handlerAddUser}/>}/>
      <Stack.Screen name="Búsqueda" options={{ headerShown: false }} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
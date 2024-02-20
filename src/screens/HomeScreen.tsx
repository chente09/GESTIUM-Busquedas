import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { InputComponent } from '../commons/InputComponent';
import { ERRor_COLOR } from '../commons/constantsColor';
import { showSnackBar, verifyExistUser } from '../commons/authValidation';
import { User } from './navigator/StackNavigator';

export interface LoginForm {
  username: string,
  password: string,
  hasError: boolean;
}

interface LoginProps {
  users: User[]
}

export const HomeScreen = ({ users }: LoginProps) => {
  const imagen = { uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707105837/ATENCION_js06mj.png' };
  //Hook de navegacion
  const navigation = useNavigation();

  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
    hasError: false
  });

  //Hook qu epermite cambiar el input pasword
  const [hiddenPassword, sethiddenPassword] = useState(true)

  //Funcion que cambiara los valores del formulario
  const handlerChangeText = (name: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  //Función que envia los datos de formulario
  const handlerSendInfo = () => {
    //Validar que los campos se encuentren llenos
    if (form.username == '' || form.password == '') {
      setForm(prevState => ({
        ...prevState,
        hasError: true
      }))
      return;
    }
    setForm(prevState => ({
      ...prevState,
      hasError: false
    }))
    //Llamar funcion para verificar si el usuario existe
    const existUser = verifyExistUser(users, form)
    if (!existUser || existUser.password != form.password) {
        showSnackBar("Usuario y/o contraseña incorrecta!", ERRor_COLOR)
        return;
    }

    console.log(form);
    navigation.dispatch(CommonActions.navigate({ name: 'Búsqueda' }))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={imagen} resizeMode="cover" style={styles.image}>
        <View style={styles.container2}>
          <SafeAreaView>
            <InputComponent
              placeholder='USUARIO'
              name='username'
              onChangeText={handlerChangeText}
              hasError={form.hasError} />
            <InputComponent
              placeholder='CONTRASEÑA'
              name='password'
              onChangeText={handlerChangeText}
              isPassword={hiddenPassword}
              hasIcon={true}
              accionIcon={() => sethiddenPassword(!hiddenPassword)}
              hasError={form.hasError} />
          </SafeAreaView>
          <ButtonComponent title='INICIAR SESIÓN' onPress={handlerSendInfo}  />
          <ButtonComponent title='REGISTRARME' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))} />
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    left: '2%',
    right: '2%',
    top: '15%'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
})
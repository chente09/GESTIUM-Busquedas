import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { InputComponent } from '../commons/InputComponent';

interface UsetForm {
  username: string,
  password: string,
  hasError: boolean;
}

interface Props extends StackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {
  const imagen = { uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707105837/ATENCION_js06mj.png' };

  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<UsetForm>({
    username: '',
    password: '',
    hasError: false
  });

  //Hook qu epermite cambiar el input pasword

  const [hiddenPassword, sethiddenPassword] = useState(true)

  //Funcion que cambiara los valores del formulario

  const handlerChangeText = (name: string, value: string) => {
    // console.log(name); //clave - propied
    // console.log(value); /// valor de clave
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
    console.log(form);

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
              hasError={form.hasError} />
          </SafeAreaView>
          <ButtonComponent title='INICIAR SESIÓN' onPress={() => navigation.navigate('Búsqueda')}  />
          <ButtonComponent title='REGISTRARME' onPress={() => navigation.navigate('Registro')} />
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
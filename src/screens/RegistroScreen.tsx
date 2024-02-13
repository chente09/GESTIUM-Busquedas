import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { InputComponent } from '../commons/InputComponent';

interface UsetForm {
  name: string,
  lastName:string,
  id:number,
  cellphone:number,
  address:string,
  email:string,
  username:string,
  password: string,
  confirmPass:string,
  hasError: boolean;
}

export default function RegistroScreen() {
  const imagen = { uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707109241/LOGO2_h3bkqu.png' };
  const [name, setName] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [cedula, setCedula] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<UsetForm>({
    name:'',
    lastName:'',
    id:0,
    cellphone:0,
    address:'',
    email:'',
    username: '',
    password: '',
    confirmPass:'',
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

  return (
    <View style={styles.container}>
    <ImageBackground source={imagen} resizeMode="cover" style={styles.image}>
      <View style={styles.container2}>
        <SafeAreaView>
          <InputComponent
              placeholder='¿Cómo te llamas?'
              name='name'
              onChangeText={handlerChangeText}
              hasError={form.hasError} />
          <InputComponent
              placeholder='¿Cuáles son tus apellidos?'
              name='lastName'
              onChangeText={handlerChangeText}
              hasError={form.hasError}/>
          <InputComponent
              placeholder='Ingresa tu número de cédula'
              name='id'
              onChangeText={handlerChangeText}
              hasError={form.hasError}/>
          <InputComponent
              placeholder='Ingresa tu número de celular'
              name='cellphone'
              onChangeText={handlerChangeText}
              hasError={form.hasError}/>
          <InputComponent
              placeholder='Ingresa tu dirección'
              name='address'
              onChangeText={handlerChangeText}
              hasError={form.hasError}/>
          <InputComponent
              placeholder='Ingresa tu correo electrónico'
              name='email'
              onChangeText={handlerChangeText}
              hasError={form.hasError}/>
          <InputComponent
              placeholder='Crea un nombre de usuario'
              name='username'
              onChangeText={handlerChangeText}
              hasError={form.hasError}/>
          <InputComponent
              placeholder='Crea una contraseña'
              name='password'
              onChangeText={handlerChangeText}
              isPassword={hiddenPassword}
              hasError={form.hasError} />
          <InputComponent
              placeholder='Confirma la contraseña'
              name='confirmPass'
              onChangeText={handlerChangeText}
              isPassword={hiddenPassword}
              hasError={form.hasError} />
        </SafeAreaView>
        <ButtonComponent title='REGÍSTRATE' onPress={() => Alert.alert('AÚN NO FUNCIONO')}/>
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
      top: '5%'
    },
    image: {
      flex: 1,
      height:800  
    },
    input: {
      backgroundColor: 'white',
      color:'black',
      fontSize:20,
      height: 40,
      margin: 9,
      borderWidth: 1,
      borderRadius: 50,
      padding: 10,
    },
  })

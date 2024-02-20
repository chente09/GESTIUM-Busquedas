import React, { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { InputComponent } from '../commons/InputComponent';
import { User } from './navigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { getIdNewUser, hasErrorFormRegister, showSnackBar, verifyExistUser } from '../commons/authValidation';
import { ERRor_COLOR } from '../commons/constantsColor';
import { stylesGlobal } from '../theme/appTheme';
import { RetryComponent } from '../components/RetryComponent';

export interface RegisterForm {
  name: string,
  lastName: string,
  ci: string,
  cellphone: string,
  address: string,
  email: string,
  username: string,
  password: string,
  confirmPass: string,
  hasError: boolean;
}

interface RegisterProps {
  userLogin: User[];
  setUSerLogin: (user: User) => void;
}

export const RegistroScreen = ({ userLogin, setUSerLogin }: RegisterProps) => {
  const imagen = { uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707109241/LOGO2_h3bkqu.png' };

  //Hook de navegación
  const navigation = useNavigation();

  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<RegisterForm>({
    name: '',
    lastName: '',
    ci: '',
    cellphone: '',
    address: '',
    email: '',
    username: '',
    password: '',
    confirmPass: '',
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

  //Función para guardar los usuarios
  const handleSaveUser = () => {
    if (hasErrorFormRegister(form)) {
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

    //Verificar si el usuario existe
    const existUser = verifyExistUser(userLogin, form)
    if (existUser) {
      showSnackBar("El usuario ya se encuentra registrado", ERRor_COLOR)
      return;
    }

    //Si el usuario no existe - nuevo objeto user
    const newUser: User = {
      id: getIdNewUser(userLogin),
      ...form
    }

    //agregar el nuevo usuario al arreglo usersLogin
    setUSerLogin(newUser)
    showSnackBar("Usuario registrado con éxito", 'green')

    //navegar al screen anterior - inicio de seción
    navigation.goBack();

    console.log(form);
    

  }

  return (
    <SafeAreaView style={styles.container}>
      <RetryComponent title='◀  Registro' onPress={() => navigation.goBack()}/>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
                hasError={form.hasError} />
              <InputComponent
                placeholder='Ingresa tu número de cédula'
                keyboardType='numeric'
                name='ci'
                onChangeText={handlerChangeText}
                hasError={form.hasError} />
              <InputComponent
                placeholder='Ingresa tu número de celular'
                keyboardType='numeric'
                name='cellphone'
                onChangeText={handlerChangeText}
                hasError={form.hasError} />
              <InputComponent
                placeholder='Ingresa tu dirección'
                name='address'
                onChangeText={handlerChangeText}
                hasError={form.hasError} />
              <InputComponent
                placeholder='Ingresa tu correo electrónico'
                name='email'
                onChangeText={handlerChangeText}
                hasError={form.hasError} />
              <InputComponent
                placeholder='Crea un nombre de usuario'
                name='username'
                onChangeText={handlerChangeText}
                hasError={form.hasError} />
              <InputComponent
                placeholder='Crea una contraseña'
                name='password'
                onChangeText={handlerChangeText}
                isPassword={hiddenPassword}
                hasIcon={true}
                accionIcon={() => sethiddenPassword(!hiddenPassword)}
                hasError={form.hasError} />
              <InputComponent
                placeholder='Confirma la contraseña'
                name='confirmPass'
                onChangeText={handlerChangeText}
                isPassword={hiddenPassword}
                hasIcon={true}
                accionIcon={() => sethiddenPassword(!hiddenPassword)}
                hasError={form.hasError} />
            </SafeAreaView>
            <ButtonComponent title='REGÍSTRATE' onPress={handleSaveUser} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={stylesGlobal.textNavigation}>¿Ya tienes cuenta? Inicia secion ahora</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    left: '2%',
    right: '2%',
  },
  image: {
    flex: 1,
    height: 810
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    height: 40,
    margin: 9,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
})

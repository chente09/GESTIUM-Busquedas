import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';

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

  return (
    <View style={styles.container}>
    <ImageBackground source={imagen} resizeMode="cover" style={styles.image}>
      <View style={styles.container2}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder="¿Cómo te llamas?"
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={setApellidos}
            placeholder="¿Cuáles son tus apellidos?"
            value={apellidos}
          />
          <TextInput
            style={styles.input}
            onChangeText={setCedula}
            placeholder="Ingresa tu número de cédula"
            value={cedula}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCelular}
            placeholder="Ingresa tu número de celular"
            value={celular}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setDireccion}
            placeholder="Ingresa tu dirección"
            value={direccion}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Ingresa tu correo electrónico"
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={setUsuario}
            placeholder="Crea un nombre de usuario"
            value={usuario}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Crea una contraseña"
            value={password}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPasswordConfirm}
            placeholder="Confirma la contraseña"
            value={passwordConfirm}
          />
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
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
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

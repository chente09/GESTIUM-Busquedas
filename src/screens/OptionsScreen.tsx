import React from 'react'
import { Alert, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { LogoComponent } from '../components/LogoComponent'

export const OptionsScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <ButtonComponent title='PREGUNTAS FRECUENTES' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
      <ButtonComponent title='CONTACTO Y SOPORTE' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
      <ButtonComponent title='POLITICAS DE PRIVACIDAD' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
      <ButtonComponent title='TERMINOS Y CONDICIONES' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
      <ButtonComponent title='ELIMINAR CUENTA' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
      <LogoComponent/>
    </View>
  )
}


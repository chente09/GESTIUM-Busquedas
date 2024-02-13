import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ERRor_COLOR, INPUT_COLOR } from './constantsColor'

interface InputProps {
  placeholder: string;
  name: string;
  onChangeText: (name: string, value: string) => void;
  isPassword?: boolean;
  hasError: boolean;
}

export const InputComponent = ({ placeholder, name, onChangeText, isPassword = false, hasError }: InputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        keyboardType='default'
        style={(hasError)
          ? { ...styles.inputText, ...styles.error }
          : { ...styles.inputText }}
        onChangeText={(value: string) => onChangeText(name, value)}
        secureTextEntry={isPassword} />
      {
        (hasError)
          ? <Text style={styles.errorText}>El Campo es obligatorio</Text>
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    height: 50,
    margin: 4,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  error: {
    borderColor: ERRor_COLOR,
    borderStyle: 'solid',
    borderWidth: 1
  },
  errorText: {
    borderColor:ERRor_COLOR,
    color:ERRor_COLOR,
    fontSize: 14,
    fontWeight: 'bold'
  }

})
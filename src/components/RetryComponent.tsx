import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constantsColor';


interface ButtonProps{
    title:string;
    onPress:()=>void;
}
export const RetryComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonConatiner}
    onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    buttonConatiner:{
        backgroundColor:'black',
        paddingVertical:10,
    },
    buttonText:{
        marginHorizontal:20,
        color:SECUNDARY_COLOR,
        fontSize:25,
        fontWeight:'bold'
    }
})

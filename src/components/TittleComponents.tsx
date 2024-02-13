import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

interface TitleProps{
    title: string;
}
export const TittleComponents = ({title}:TitleProps) => {
    const{height}=useWindowDimensions();
  return (
    <View>
        <Text style={{
            height:height*0.12,
            ...styles.title}}>{title}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    title:{
        textAlign:'center',
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:20,

    }
})
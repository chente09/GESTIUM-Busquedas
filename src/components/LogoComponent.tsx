import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const LogoComponent = () => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707113175/Dise%C3%B1o_sin_t%C3%ADtulo_cxxwog.png',
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    tinyLogo: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    container:{
        alignItems:'center'
    }
  })

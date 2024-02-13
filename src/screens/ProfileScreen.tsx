import React from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { LogoComponent } from '../components/LogoComponent';

export const ProfileScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <View>
                <View style={styles.contImg}>
                    <LogoComponent/>
                    <Text>Nombre Usuario</Text>
                    <Text>Ci:000000000</Text>
                </View>
                <ButtonComponent title='TOMAR UNA FOTO' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
                <ButtonComponent title='SELECCIONAR DE LA GALERIA' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
            </View>
            <View style={styles.contBtnGardar}>
            <ButtonComponent title='GUARADR' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contImg:{
        marginTop:20,
        alignContent:'center',
        alignItems:'center'
    },
    contBtnGardar:{
        position:'absolute',
        bottom:0,
        alignSelf:'center'
        
    }
});

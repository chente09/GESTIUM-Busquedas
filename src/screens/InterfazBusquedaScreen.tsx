import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';

export const InterfazBusquedaScreen = () => {
    const [name, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [celular, setCelular] = useState('');

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={styles.container2}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707113175/Dise%C3%B1o_sin_t%C3%ADtulo_cxxwog.png',
                    }}
                />
                <Text style={styles.title}>
                    GESTIUM Servicios Legales Integrales
                    - CONSULTA DE PROCESOS JUDICIALES ELECTRÓNICOS
                </Text>
            </View>

            <View style={styles.container3}>
                <SafeAreaView>
                    <Text style={styles.textInput}>Busqueda Avanzada</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        placeholder="Número de proceso"
                        value={name}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setApellidos}
                        placeholder="Buscar por numero de cédula"
                        value={apellidos}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCedula}
                        placeholder="Buscar por nombre"
                        value={cedula}

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCelular}
                        placeholder="Buscar por número de celular"
                        value={celular}
                        keyboardType="numeric"
                    />
                </SafeAreaView>

            </View>
            <View>
                <ButtonComponent title='BUSCAR' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
                <ButtonComponent title='LIMPIAR' onPress={() => Alert.alert('AÚN NO FUNCIONO')} />
            </View>

        </View>

    )
}
const styles = StyleSheet.create({

    container2: {
        marginTop: '1%',
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4
    },
    container3: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    title: {
        top: '5%',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',

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
    textInput: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
        paddingLeft: 10,
    },

})

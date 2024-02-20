import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { LogoComponent } from '../components/LogoComponent';
import { InputComponent } from '../commons/InputComponent';

export interface BusquedasForm {
    nroProceso: string,
    name: string,
    lastName: string,
    ci: string,
    cellphone: string,
}

//Data de Prueba
export interface Proceso {
    id: number;
    nroProceso: string;
    ci: string;
    name: string;
    lastName: string;
    cellphone: string;
    etapa: string;
    gestor: string;
    fecha: string;
}

const procesos: Proceso[] = [
    { id: 1, nroProceso: 'JC-PIC-01-2024', ci: '0401786462', name: 'Vicente', lastName: 'Nenger', cellphone: '0969375372', etapa: 'Inicial', gestor: 'Tatiana', fecha: '19-2-2024' },
    { id: 2, nroProceso: 'JC-PIC-02-2024', ci: '1711716819', name: 'Pedro', lastName: 'Bstidas', cellphone: '0983875666', etapa: 'Notaria', gestor: 'Nicol', fecha: '19-2-2024' },
    { id: 3, nroProceso: 'JC-PIC-03-2024', ci: '1725365522', name: 'Nohelia', lastName: 'Santana', cellphone: '0955632155', etapa: 'Ingreso', gestor: 'Silvia', fecha: '19-2-2024' },
    { id: 4, nroProceso: 'JC-PIC-04-2024', ci: '1522622555', name: 'Andres', lastName: 'Morales', cellphone: '0966335577', etapa: 'Registro Propiedad', gestor: 'Isabel', fecha: '19-2-2024' },
    { id: 5, nroProceso: 'JC-PIC-05-2024', ci: '1565186513', name: 'Carlos', lastName: 'Sanchez', cellphone: '0933664477', etapa: 'Notaria', gestor: 'Jeremy', fecha: '19-2-2024' },
    { id: 6, nroProceso: 'JC-PIC-06-2024', ci: '1565486492', name: 'Michel', lastName: 'Perez', cellphone: '0995522336', etapa: 'Ingreso', gestor: 'David', fecha: '19-2-2024' },
    { id: 7, nroProceso: 'JC-PIC-07-2024', ci: '1565135155', name: 'David', lastName: 'Ramirez', cellphone: '0987735220', etapa: 'Registro Propiedad', gestor: 'Michel', fecha: '19-2-2024' },
    { id: 8, nroProceso: 'JC-PIC-08-2024', ci: '0525156354', name: 'Julian', lastName: 'Alvarez', cellphone: '0987562341', etapa: 'Municipio', gestor: 'Kathy', fecha: '19-2-2024' },
    { id: 9, nroProceso: 'JC-PIC-09-2024', ci: '0435135132', name: 'Genny', lastName: 'Rodriguez', cellphone: '0987542361', etapa: 'Notaria', gestor: 'Sofia', fecha: '19-2-2024' },
    { id: 10, nroProceso: 'JC-PIC-10-2024', ci: '0786513515', name: 'Gabriela', lastName: 'Reyes', cellphone: '0987355122', etapa: 'Inicial', gestor: 'Marco', fecha: '19-2-2024' }

]

const ResultadosComponent: React.FC<{ resultados: Proceso[] }> = ({ resultados }) => (
    <View style={styles.resultadosContainer}>
        {resultados.map((proceso) => (
            <View key={proceso.id} style={styles.resultadoItem}>
                <Text style={styles.textResultado}>Número de Proceso: {proceso.nroProceso}</Text>
                <Text style={styles.textResultado}>Cedula de identidad: {proceso.ci}</Text>
                <Text style={styles.textResultado}>Nombre: {proceso.name}</Text>
                <Text style={styles.textResultado}>Apellido: {proceso.lastName}</Text>
                <Text style={styles.textResultado}>Número de Celular: {proceso.cellphone}</Text>
                <Text style={styles.textResultado}>Etapa: {proceso.etapa}</Text>
                <Text style={styles.textResultado}>Quien Gestiona: {proceso.gestor}</Text>
                <Text style={styles.textResultado}>Fecha: {proceso.fecha}</Text>
            </View>
        ))}
    </View>
);

export const InterfazBusquedaScreen: React.FC = () => {
    //Hook para actualizar el estado de los procesos
    const [productsState, setProductsState] = useState<Proceso[]>([]);

    //Gestionar los datos de mi formulario
    const [form, setForm] = useState<BusquedasForm>({
        nroProceso: '',
        name: '',
        lastName: '',
        ci: '',
        cellphone: '',
    });

    //Funcion que cambiara los valores del formulario
    const handlerChangeText = (name: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    // Función para realizar la búsqueda
    const buscarProcesos = () => {
        const resultados = procesos.filter(proceso => {
            return (
                (form.nroProceso && proceso.nroProceso.includes(form.nroProceso)) ||
                (form.ci && proceso.ci.includes(form.ci)) ||
                (form.name && proceso.name.toLowerCase().includes(form.name.toLowerCase())) ||
                (form.lastName && proceso.lastName.toLowerCase().includes(form.lastName.toLowerCase())) ||
                (form.cellphone && proceso.cellphone.includes(form.cellphone))
            );
        });

        // Actualizar el estado con los resultados de la búsqueda
        setProductsState(resultados);
    };
    const limpiarCampos = () => {
        setProductsState([]);
        setForm({
            nroProceso: '',
            name: '',
            lastName: '',
            ci: '',
            cellphone: '',
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container2}>
                    <LogoComponent />
                    <Text style={styles.title}>
                        GESTIUM Servicios Legales Integrales
                        - CONSULTA DE PROCESOS JUDICIALES ELECTRÓNICOS
                    </Text>
                </View>

                <View style={styles.container3}>
                    <SafeAreaView>
                        <Text style={styles.textInput}>Busqueda Avanzada</Text>
                        <InputComponent
                            placeholder='Número de porceso'
                            name='nroProceso'
                            onChangeText={handlerChangeText}
                            hasError={false} />
                        <InputComponent
                            placeholder='Buscar por numero de cédula'
                            name='ci'
                            onChangeText={handlerChangeText}
                            hasError={false}
                            keyboardType='numeric' />
                        <InputComponent
                            placeholder='Buscar por nombre'
                            name='name'
                            onChangeText={handlerChangeText}
                            hasError={false} />
                        <InputComponent
                            placeholder='Buscar por apellido'
                            name='lastName'
                            onChangeText={handlerChangeText}
                            hasError={false} />
                        <InputComponent
                            placeholder='Buscar por número de celular'
                            name='cellphone'
                            onChangeText={handlerChangeText}
                            hasError={false}
                            keyboardType='numeric' />
                    </SafeAreaView>
                </View>
                <View>
                    <ButtonComponent title='BUSCAR' onPress={buscarProcesos} />
                    <ButtonComponent title='LIMPIAR' onPress={limpiarCampos} />
                </View>
                {productsState.length > 0 && (
                    <ResultadosComponent resultados={productsState} />
                )}
            </ScrollView>
        </SafeAreaView>
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
    title: {
        top: '5%',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',

    },
    textInput: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
        paddingLeft: 10,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    resultadosContainer: {
        marginTop: 20,
    },
    resultadoItem: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 5,
    },
    textResultado:{
        color:'black',
        fontSize:18
    }
})

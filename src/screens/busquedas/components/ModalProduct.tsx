import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Image } from 'react-native';
import { ERRor_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from '../../../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { stylesGlobal } from '../../../theme/appTheme';

interface Props {
    isVisible: boolean;
    changeVisible: () => void;
    handlerChangeStockProduct: (idProducto: number, quantity: number) => void;
}
export const ModalProduct = ({ isVisible, changeVisible, handlerChangeStockProduct }: Props) => {
    //Hook para la dimencion de mi pantalla
    const { width } = useWindowDimensions();

    

    
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.root}>
                <View style={{
                    width: width * 0.80,
                    ...stylesGlobal.content
                }}>
                    <View style={stylesGlobal.headerModal}>
                        
                        <View style={stylesGlobal.iconClose}>
                            <Icon name={'cancel'} size={25} color={ERRor_COLOR} onPress={changeVisible} />
                        </View>
                    </View>
                    
                    


                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    image: {
        alignItems: 'center'
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        margin: 15,
    },
    buttonQuantityText: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnCar: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 15,
    },
    btnCarText: {
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },
    textError: {
        color: ERRor_COLOR,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }

})
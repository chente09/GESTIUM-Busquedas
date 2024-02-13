import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'



interface ButtonProps {
    title: string;
    onPress: () => void;
}
export const ButtonComponent = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onPress}>
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 9,
        borderWidth: 5,
        padding: 10,
        width: 300,
        alignSelf: 'center',
    },
    textBtn: {
        color: 'black',
        fontSize: 22,
    },
})

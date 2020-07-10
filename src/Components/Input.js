import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

export const Input = props => {
    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                autoCompleteType='username'
                placeholderTextColor='white'
                placeholder={props.placeholder}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    block: {
        width: '100%',
        alignItems: 'center'
    },  
    input: {
        color: '#fff',
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff',
        width: '90%',
        padding: 20,
        borderRadius: 7,
        fontSize: 18,
        marginBottom: 20
    }

});
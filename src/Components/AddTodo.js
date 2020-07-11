import React, {useState} from 'react'
import {View, Button, StyleSheet, TextInput, Alert} from 'react-native'


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("")


    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            //error
            Alert.alert('Поле то пустое...')
        }
    }

    return (
        <View style={styles.addtodo}> 
                <TextInput 
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    autoFocus={true}
                />
                <Button 
                    onPress={pressHandler}
                    title='Добавить'
                />
        </View>
    )
} 

const styles = StyleSheet.create ({
    addtodo: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 15
    }
})
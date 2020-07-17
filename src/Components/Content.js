import React, {useState} from 'react'
import {View, ImageBackground, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { AddTodo } from '../Components/AddTodo'

export const Content = props => {

    const [todos, setTodos] = useState([])

    const addTodo = title => {
        setTodos(prev => [
            {
                id: Date.now().toString(),
                title
            },
            ...prev
        ])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <View style={styles.blockTodo}>
            <ImageBackground 
                source={require('../../assets/bgcontent.png')}
                style={{width: '100%', height: '100%', padding: 20}} 
            >
                <AddTodo onSubmit={addTodo} />
                <ScrollView >
                    {todos.map(todo => {
                        return (
                            <TouchableOpacity 
                                key={todo.id} 
                                activeOpacity={0.5}
                                onPress={()=> console.log('Pressed', todo.id)}
                                onLongPress={() => removeTodo(todo.id)}
                                >
                                <Text style={styles.todo} key={todo.id}>{todo.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </ImageBackground>
        </View>
    )
} 

const styles = StyleSheet.create({
    blockTodo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    todo: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
        color: '#000',
        marginBottom: 10,
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
}); 
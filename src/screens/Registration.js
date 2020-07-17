import React from 'react'
import { View, ImageBackground, Text, Button, TouchableHighlight, StyleSheet } from 'react-native'
import { Input } from '../Components/Input'

export const Registration = () => {
    return (
        <View>
            <ImageBackground 
                source={require('../../assets/bgmain.jpg')}
                style={{width: '100%', height: '100%'}} 
            >
                <View style={styles.container}>
                    <Text  style={styles.title}>
                        GYM or pay
                    </Text>
                    <Input
                        placeholder='Ваше имя'
                    />
                    <Input
                        placeholder='Пароль'
                    />
                    <TouchableHighlight style={styles.button}>
                        <Button
                            title="Войти"
                            color='#000'
                        />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.link}>
                            <Text style={styles.linkText}>Забыли пароль?</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.link}>
                            <Text style={styles.linkText}>Зарегистрироваться</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ImageBackground>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2
    },
    title: {
        color: '#fff',
        fontSize: 36,
        marginBottom: 100
    },
    button: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 7,
        padding: 10,
        marginBottom: 90,
        marginTop: 20
    },
    link: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginBottom: 15
    },
    linkText: {
        color: '#fff',
        fontSize: 18
    }

});
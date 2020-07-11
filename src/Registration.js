import React from 'react'
import { View, ImageBackground, TextInput, Text, Button, TouchableHighlight, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'
import { Input } from './Components/Input'

export const Registration = () => {
    return (
        <View>
            <ImageBackground 
                source={require('../assets/bgmain.jpg')}
                style={{width: '100%', height: '100%'}} 
            >
                <View style={styles.container}>
                    <Text  style={styles.title}>
                        GYM or pay
                    </Text>
                    <Input
                        placeholder='e-mail'
                    />
                    <Input
                        placeholder='password'
                    />
                    <TouchableHighlight style={styles.button}>
                        <Button
                            title="Login"
                            color='#000'
                        />
                    </TouchableHighlight>
                    <Text style={styles.text}> 
                        sign in with
                    </Text>
                    <View style={styles.iconBlock}>
                        <TouchableHighlight>
                            <Icon
                            name='sc-vk'
                            type='evilicon'
                            color='#517fa4'
                            style={styles.icon}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Icon
                            name='sc-facebook'
                            type='evilicon'
                            color='#517fa4'
                            style={styles.icon}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Icon
                            name='sc-linkedin'
                            type='evilicon'
                            color='#517fa4'
                            style={styles.iconLast}
                            />
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight>
                        <View style={styles.link}>
                            <Text style={styles.linkText}>Forgot passwort?</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.link}>
                            <Text style={styles.linkText}>Sing in</Text>
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
        marginBottom: 40
    },
    button: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 7,
        padding: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginBottom:20,
        marginTop:20
    },
    iconBlock: {
        flexDirection: 'row',
        marginBottom: 30
    },
    icon: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        marginRight: 15
    },
    iconLast: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        marginRight: 0
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
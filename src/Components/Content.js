import React from 'react'
import {View, Button, ImageBackground, StyleSheet} from 'react-native'
import { Input } from './Input'

export const Content = props => {
    return (
        <View>
            <ImageBackground 
                source={require('../Components/assets/bgcontent.png')}
                style={{width: '100%', height: '100%'}} 
            >
                <Input />
                <Button 
                    title='Добавить'
                />
            </ImageBackground>
            
        </View>
    )
} 
import React from 'react'
import {View, StyleSheet} from 'react-native' 
import { Header } from 'react-native-elements'

export const Navbar = (props) => {
    return (
        <View >
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Лента', style: { color: '#fff', fontSize: 18 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
                backgroundColor: '#000000',
                justifyContent: 'space-between',
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   
})
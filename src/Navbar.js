import React from 'react'
import {View, Text, StyleSheet} from 'react-native' 

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Лента</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        paddingBottom: 20
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
})
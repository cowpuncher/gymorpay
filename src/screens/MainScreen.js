import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { Navbar } from '../Navbar'
import { Content } from '../Components/Content'


export const MainScreen = props => {
    return (
        <View>
            <Navbar />
            <Content />
        </View>
    )
}

const styles = StyleSheet.create({})
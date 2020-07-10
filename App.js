import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Navbar} from './src/Navbar'
import { Registration } from './src/Registration';
import { Content } from './src/Components/Content'

export default function App() {
  return (
    <View style={styles.container}>
      <Registration />

    </View>
  );
}

const styles = StyleSheet.create({
  
});
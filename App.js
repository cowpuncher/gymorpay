import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { AddBetScreen } from './src/screens/AddBetScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)

  let mainScreen = (
    <MainScreen />
  )

  if(todoId) {
    mainScreen = <AddBetScreen />
  }


  return (
    <View style={styles.container}>
      {mainScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  
});
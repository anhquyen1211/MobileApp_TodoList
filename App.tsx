import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <Button title="Hello" onPress={()=>{ Alert.alert('Welcome !!!') }}/>
      <TextInput style={styles.textInput} placeholder='Enter task here...'></TextInput>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 32,
  },

  textInput: {
    opacity: 0.7,
  }
});
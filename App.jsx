import { View, Text, Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize: 30}}>Jatin Sharma</Text>
      <Text style={{fontSize: 30}}>I'm a Application Developer</Text>
      <Button title="Press Here"/>
    </View>
  )
}

export default App
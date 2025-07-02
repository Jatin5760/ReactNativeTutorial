import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import UseStateHook from './src/components/UseStateHook'
//import First from './src/components/First'
//import JSX from "./src/components/JSX"
// import OnPress from './src/components/OnPress'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      {/* <Text style={{fontSize: 30}}>Jatin Sharma</Text>
      <Text style={{fontSize: 30}}>I'm a Application Developer</Text>
      <Button title="Press Me"/> */}
    {/* <First/> */}

    {/* <JSX/> */}


    {/* <OnPress/> */}

    <UseStateHook/>
    </View>
  )
}
 
export default App
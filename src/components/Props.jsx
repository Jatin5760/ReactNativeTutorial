import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

export default function Props() {

  const [count, setCount]  = useState(0)

  return (
    <View>
      <Text style={{fontSize: 30}}>Props</Text>
      <Button title='Press Me' onPress={() => setCount(count + 1)}/>
      <Child data = {count}/>
    </View>
  )
}
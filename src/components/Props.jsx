import { View, Text } from 'react-native'
import React from 'react'
import Child from './Child'

export default function Props() {
  return (
    <View>
      <Text style={{fontSize: 30}}>Props</Text>
      <Child/>
    </View>
  )
}
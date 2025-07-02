import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Child() {
    const [count, setCount]  = useState()
  return (
    <View>
      <Text style={{fontSize: 30}}>Child</Text>
    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'


const [count, setCount] = useState();

export default function UseStateHook() {
  return (
    <View>
      <Text style={{fontSize: 30}}>UseStateHook</Text>
    </View>
  )
}
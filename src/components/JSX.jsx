import { View, Text } from 'react-native'
import React from 'react'

  let name = "Jatin";
  const getAge = () => {
    return 22;
  }

export default function JSX () {
  return (
    <View>
      <Text style={{fontSize: 30}}>JSX</Text>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{5+3}</Text>
      <Text style={{fontSize: 30}}>{getAge()}</Text>
    </View>
  )
}

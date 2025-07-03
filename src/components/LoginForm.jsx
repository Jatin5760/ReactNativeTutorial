import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState()
    const [pass, setPassword] = useState()
  return (
    <View>
      <Text>LoginForm</Text>
    </View>
  )
}
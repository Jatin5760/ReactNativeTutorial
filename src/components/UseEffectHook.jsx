import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function UseEffectHook() {

    // UseEffect se ham log funtion ki lifecycle method check kar sakte hai
    // Mouting, Updating and unmounting
    // API se data fetch karte time Useeffect ka use karte hai,
    // Manlo gar useeffect ka use nahi kiya aur api se data fetch karliya, aur agar ui ke render hone se pehele data api se nahi aya toh baat bigad sakti hai.
    useEffect(() => {
        // Mounting lifecycle use hua
      console.log("This is a useEffect Hook");
    }, [])
    
  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffectHook</Text>
    </View>
  )
}
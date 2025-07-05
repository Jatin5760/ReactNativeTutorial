import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    // UseEffect se ham log funtion ki lifecycle method check kar sakte hai
    // Mouting, Updating and unmounting
    // API se data fetch karte time Useeffect ka use karte hai,
    // Manlo gar useeffect ka use nahi kiya aur api se data fetch karliya, aur agar ui ke render hone se pehele data api se nahi aya toh baat bigad sakti hai.
    const [count, setCount] = useState(1);
    useEffect(() => {
        // Mounting lifecycle use hua jaise ji component render hua ye run ho jayega
        console.log("This is a useEffect Hook");
    }, [])
    
  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffectHook</Text>
      <Text style={{fontSize: 30}}>Count:{count}</Text>
      <Button title='Counter' onPress={()=> setCount(count + 1)}/>
    </View>
  )
}
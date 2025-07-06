import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Showchild from './Showchild';

export default function UseEffect_Unmounting_Phase() {
    // Unmounting matlab koi button mai click kiya aur wo component gayab ho gya
    const [showChild, setShowChild] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>Parent Component</Text>
      {
        showChild ? <Showchild/> : null
      }
      <Button title='Toggle' onPress={()=> setShowChild(!showChild)}/>
    </View>
  )
}
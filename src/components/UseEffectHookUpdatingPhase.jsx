import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const InfoDetails = ({count,points}) => {
    useEffect(() => {
      console.log("I'm a child component");
    }, [count])
    
    return (
        <View>
            <Text style={{fontSize: 30, marginBottom: 10}}>Info Details</Text>
            <Text style={{fontSize: 30, marginBottom: 10}}>count: {count}</Text>
            <Text style={{fontSize: 30, marginBottom: 10}}>points: {points}</Text>
        </View>
    );
}

export default function UseEffectHookUpdatingPhase() {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);
    useEffect(() => {
        console.log("Useffect is called by updating counter");
        
    }, [counter]);

    useEffect(() => {
        console.log("Useffect is called by updating score");
        
    }, [score]);
  return (
    <View>
      <Text style={{fontSize: 30, marginBottom: 10}}>UseEffectHookUpdatingPhase</Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>Counter: {counter}</Text>      
      <Text style={{fontSize: 30, marginBottom: 10}}>Score: {score}</Text> 
      <Button title='Counter' onPress={()=> setCounter(counter+ 1)}/>     
      <Button title='Score' onPress={()=> setScore(score + 1)}/>   
      <InfoDetails count={counter} points={score}/>  
    </View>
  )
}
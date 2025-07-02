import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function UseStateHook() {
  const [name, setName] = useState('Jatin');
  const [counter, setCounter] = useState(0);
  const updateName = () => {
    setName('Jayant');
  };
  const setCount = () => {
    setCounter(counter + 1)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>UseStateHook</Text>
      <Text style={{ fontSize: 30 }}>Name: {name}</Text>
      <Text style={{ fontSize: 30 }}>Count: {counter}</Text>
      <Button title="Press" onPress={updateName} />
      <Button title="Increase Counter" onPress={setCount} />
    </View>
  );
}

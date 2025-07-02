import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function UseStateHook() {
  const [name, setName] = useState('Jatin');
  const updateName = () => {
    setName('Jayant');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>UseStateHook</Text>
      <Text style={{ fontSize: 30 }}>Name: {name}</Text>
      <Button title="Press" onPress={updateName} />
    </View>
  );
}
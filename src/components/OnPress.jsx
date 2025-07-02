import { View, Text, Button } from 'react-native';
import React from 'react';

const getName = (name) => {
  console.log("Name", name);
};

export default function OnPress() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>OnPress</Text>
      <Button onPress={() => getName("Jatin")} title="Press" />
    </View>
  );
}
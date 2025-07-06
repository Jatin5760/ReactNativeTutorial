import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export default function Showchild() {
  useEffect(() => {
    // Mouting ho raha hai
    //   console.log("I'm a child component");

    // Unmounting phase
    return () => {
      console.log('Child Component Unmounted');
    };
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Child Component</Text>
    </View>
  );
}

import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function InputText() {
    const [username, setUserName] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>InputText</Text>
      <Text style={{fontSize: 20}}>Username: {username}</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 2,
          borderColor: 'green',
          padding: 10,
          textAlign: 'center',
        }}
        placeholder="Enter Your User Name"
        onChangeText={(value)=>setUserName(value)}
        value={username}
      />

      <Button title='Clear' onPress={()=> setUserName('')} />
    </View>
  );
}
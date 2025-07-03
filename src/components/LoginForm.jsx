import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const handleLogin = ()=>{
    console.log('Email:', email)
    console.log('Email:', pass)

    setEmail('')
    setPassword('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LoginForm</Text>
      <TextInput
      style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      <TextInput
      style={styles.input}
        placeholder="Password"
        value={pass}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.buttonStyle}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        paddingHorizontal:20,
        paddingTop: 40,
        backgroundColor: '#f0f0f0',
    },
    heading:{
        fontSize: 20,
        fontWeight:'bold',
        marginBottom: 30,
        textAlign:'center',
        color:"#333"
    },
    input:{
        height:50,
        borderColor:"#f0f0f0",
        borderWidth:1,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius:10,
        backgroundColor:"#fff",
        fontSize:16,
        color:"#333"
    },
    password:{
        height:50,
        borderColor:"#f0f0f0",
        borderWidth:1,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius:10,
        backgroundColor:"#fff",
        fontSize:16,
        color:"#333"
    },
    buttonStyle:{
        backgroundColor:'#6200EE',
        paddingVertical:15,
        borderRadius:10,
        alignItems:'center'
    },
    btnText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold"
    }


})
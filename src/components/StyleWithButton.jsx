import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

export default function StyleWithButton() {
  return (
    <View>
    <Text style={{fontSize: 30}}>Button</Text>
      <Button title='Press Me' color={'red'}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.button} onPress={()=>{
            console.log("Hello")
        }}>
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  )
}


const styles = StyleSheet.create({
    button:{
        margin:20,
        backgroundColor: '#4E31AA',
        padding: 20,
        borderRadius: 25,
        elevation: 5,
    },
    buttonText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
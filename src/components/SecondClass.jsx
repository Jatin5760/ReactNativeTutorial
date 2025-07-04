import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SecondClass extends Component {
    constructor(){
        super();
        this.state = {
            myName : 'Jatin',
        };
    }
    
  render() {
    return (
      <View>
        <Text style={{fontSize:20}}> textInComponent </Text>
      </View>
    )
  }
}

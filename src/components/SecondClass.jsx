import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class SecondClass extends Component {
    // Ye ek special method hai class ka, koi bhi component render hone se phele ye method call hota hai.
    constructor(){
        // Super bascially jo parent class ka constructor hota hai usko automatically call kardeta  hai.
        super();
        this.state = {
            myName : 'Jatin',
        };
    }
    updateName = () => {
        this.setState({myName: 'Jayant'})
    }

  render() {
    return (
      <View>
        <Text style={{fontSize:20}}>Name: {this.state.myName} </Text>
        <Button title='Update name' onPress={this.updateName}/>
      </View>
    )
  }
}

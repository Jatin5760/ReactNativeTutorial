import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SecondClass from './SecondClass'

export default class ClassComponent extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}> Class Component </Text>
        <SecondClass/>
      </View>
    )
  }
}

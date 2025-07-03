import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles/styles'

export default function Styling() {
  return (
    <View>
      <Text style={styles.text}>External Styling</Text>
    </View>
  )
}